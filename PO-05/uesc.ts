/// <reference lib="es2015.promise" />

namespace UESC {
    export class Artigo {
        constructor(public headline: string, public id: string, public brief: string) {
            this.headline = this.limitarPalavras(this.headline, 10);
            this.brief = this.limitarPalavras(this.brief, 10);
        }

        private limitarPalavras(texto: string, limite: number): string {
            const palavras = texto.split(/\s+/);
            return palavras.length > limite ? palavras.slice(0, limite).join(' ') + '...' : texto;
        }

        renderHTML(): string {
            const briefText = this.brief ? this.brief.replace(/(<p>|<\/p>)/g, "") : '';
            return `<p><strong>${this.headline}</strong><br><a href='https://news.uark.edu/articles/${this.id}'>${briefText}</a></p>`;
        }
    }

    export class Servico {
        constructor(
            public titulo: string,
            public icone: string,
            public temperatura: string,
            public umidade: string,
            public vento: string
        ) {}

        renderHTML(): string {
            return `<div class="servico">
                        <div class="icone">${this.icone}</div>
                        <div class="informacoes">
                            <strong>${this.titulo}</strong>
                            <p>${this.temperatura} °C</p>
                            <p>Umidade: ${this.umidade}</p>
                            <p>Vento: ${this.vento} m/s</p>
                        </div>
                    </div>`;
        }

        static obterEmojiClima(codigoClima: number): string {
            switch (codigoClima) {
                case 0: return '☀️';
                case 1:
                case 2:
                case 3: return '🌥️';
                case 45:
                case 48: return '🌫️';
                case 51:
                case 53:
                case 55: return '🌧️';
                case 56:
                case 57: return '🌧️❄️';
                case 61:
                case 63:
                case 65: return '🌧️';
                case 66:
                case 67: return '🌧️❄️';
                case 71:
                case 73:
                case 75: return '❄️';
                case 77: return '🌨️';
                case 80:
                case 81:
                case 82: return '🌦️';
                case 85:
                case 86: return '🌨️';
                case 95: return '⛈️';
                case 96:
                case 99: return '⛈️🌨️';
                default: return '❓';
            }
        }
    }

    export class Destaque {
        constructor(public imagem1: string, public imagem2: string) {}

        static async obterImagensAcademicas(): Promise<Destaque> {
            const apiKey = 'qYMMCX-c0x8KLP7zBxUR9C_1qbr3HGa3pLoyG9xmWrY';

            const obterImagem = async () => {
                const response = await fetch(`https://api.unsplash.com/photos/random?query=academic&client_id=${apiKey}`);
                const data = await response.json();
                return data.urls.regular;
            };

            const [imagem1, imagem2] = await Promise.all([obterImagem(), obterImagem()]);
            return new Destaque(imagem1, imagem2);
        }

        renderHTML(): string {
            return `<img src="${this.imagem1}" alt=""><img src="${this.imagem2}" alt="">`;
        }
    }

    export class Resultados {
        constructor(public noticias: any[]) {}

        static async obterNoticias(): Promise<Resultados> {
            const response = await fetch('https://api.spaceflightnewsapi.net/v3/articles');
            const noticias = await response.json();
            return new Resultados(noticias.slice(0, 3)); // Limitando para 3 artigos
        }

        truncarTexto(texto: string, limitePalavras: number): string {
            const palavras = texto.split(' ').slice(0, limitePalavras);
            return palavras.length < texto.split(' ').length ? `${palavras.join(' ')} ...` : palavras.join(' ');
        }

        renderHTML(): string {
            const noticiasHTML = this.noticias
                .map((noticia) => `<p><strong>${this.truncarTexto(noticia.title, 10)}</strong><br>${this.truncarTexto(noticia.summary, 10)}<br><a href="${noticia.url}">Leia mais</a></p>`)
                .join('');

            return noticiasHTML;
        }
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    try {
        await carregarArtigos();
        await carregarClima();
        await carregarDestaque();
        await carregarNoticias();
    } catch (error) {
        console.error('Erro:', error);
    }
});

async function carregarArtigos() {
    const articlesData = await fetch('https://campusdata.uark.edu/apiv2/articles/SearchArticle?$orderby=publishDate+desc&$top=3');
    const articles = await articlesData.json();

    const artigos = articles.map((a: any) => new UESC.Artigo(a.headline, a.id, a.brief));

    const noticiasSection = document.getElementById('noticias');
    if (noticiasSection) {
        const blocoArticle = noticiasSection.querySelector('.bloco');
        if (blocoArticle) {
            blocoArticle.innerHTML = artigos.map(artigo => artigo.renderHTML()).join('');
        }
    }
}

async function carregarClima() {
    const latitude = '-14.798104';
    const longitude = '-39.172263';

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weathercode`;

    const climaData = await fetch(url);
    const data = await climaData.json();

    const currentTemperature = data.current?.temperature_2m;
    const currentHumidity = data.current?.relative_humidity_2m;
    const currentWindSpeed = data.current?.wind_speed_10m;
    const weatherCode = data.current?.weathercode;

    if (currentTemperature !== undefined && currentHumidity !== undefined && currentWindSpeed !== undefined) {
        const servicos = [
            new UESC.Servico(
                'Condição Atual em Uesc',
                UESC.Servico.obterEmojiClima(weatherCode),
                currentTemperature,
                currentHumidity,
                currentWindSpeed
            )
        ];

        const servicosSection = document.getElementById('servicos');
        if (servicosSection) {
            const blocoArticle = servicosSection.querySelector('.bloco');
            if (blocoArticle) {
                blocoArticle.innerHTML = servicos.map(servico => servico.renderHTML()).join('');
            }
        }
    } else {
        console.error('Error: Não foi possível obter dados do clima.');
    }
}

async function carregarDestaque() {
    try {
        const destaque = await UESC.Destaque.obterImagensAcademicas();
        const destaqueHTML = destaque.renderHTML();

        const blocoArticle = document.querySelector('#destaque .bloco');
        if (blocoArticle) {
            blocoArticle.innerHTML = destaqueHTML;
        }
    } catch (error) {
        console.error('Erro ao obter imagens do Unsplash:', error);
    }
}

async function carregarNoticias() {
    try {
        const resultados = await UESC.Resultados.obterNoticias();

        const blocoArticle = document.querySelector('#resultados .bloco');
        if (blocoArticle) {
            blocoArticle.innerHTML = resultados.renderHTML();
        }
    } catch (error) {
        console.error('Erro ao obter notícias:', error);
    }
}
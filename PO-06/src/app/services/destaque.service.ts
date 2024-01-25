import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DestaqueService {
  async obterDestaque(): Promise<any> {
    try {
      const apiKey = 'qYMMCX-c0x8KLP7zBxUR9C_1qbr3HGa3pLoyG9xmWrY';

      const obterImagem = async () => {
        const response = await fetch(`https://api.unsplash.com/photos/random?query=academic&client_id=${apiKey}`);
        const data = await response.json();
        return data.urls.regular;
      };

      const [imagem1, imagem2] = await Promise.all([obterImagem(), obterImagem()]);
      return {
        imagem1,
        imagem2,
      };
    } catch (error) {
      console.error('Erro ao obter imagens do Unsplash:', error);
      throw error;
    }
  }
}

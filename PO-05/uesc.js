/// <reference lib="es2015.promise" />
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var UESC;
(function (UESC) {
    var Artigo = /** @class */ (function () {
        function Artigo(headline, id, brief) {
            this.headline = headline;
            this.id = id;
            this.brief = brief;
            this.headline = this.limitarPalavras(this.headline, 10);
            this.brief = this.limitarPalavras(this.brief, 10);
        }
        Artigo.prototype.limitarPalavras = function (texto, limite) {
            var palavras = texto.split(/\s+/);
            return palavras.length > limite ? palavras.slice(0, limite).join(' ') + '...' : texto;
        };
        Artigo.prototype.renderHTML = function () {
            var briefText = this.brief ? this.brief.replace(/(<p>|<\/p>)/g, "") : '';
            return "<p><strong>".concat(this.headline, "</strong><br><a href='https://news.uark.edu/articles/").concat(this.id, "'>").concat(briefText, "</a></p>");
        };
        return Artigo;
    }());
    UESC.Artigo = Artigo;
    var Servico = /** @class */ (function () {
        function Servico(titulo, icone, temperatura, umidade, vento) {
            this.titulo = titulo;
            this.icone = icone;
            this.temperatura = temperatura;
            this.umidade = umidade;
            this.vento = vento;
        }
        Servico.prototype.renderHTML = function () {
            return "<div class=\"servico\">\n                        <div class=\"icone\">".concat(this.icone, "</div>\n                        <div class=\"informacoes\">\n                            <strong>").concat(this.titulo, "</strong>\n                            <p>").concat(this.temperatura, " \u00B0C</p>\n                            <p>Umidade: ").concat(this.umidade, "</p>\n                            <p>Vento: ").concat(this.vento, " m/s</p>\n                        </div>\n                    </div>");
        };
        Servico.obterEmojiClima = function (codigoClima) {
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
        };
        return Servico;
    }());
    UESC.Servico = Servico;
    var Destaque = /** @class */ (function () {
        function Destaque(imagem1, imagem2) {
            this.imagem1 = imagem1;
            this.imagem2 = imagem2;
        }
        Destaque.obterImagensAcademicas = function () {
            return __awaiter(this, void 0, void 0, function () {
                var apiKey, obterImagem, _a, imagem1, imagem2;
                var _this = this;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            apiKey = 'qYMMCX-c0x8KLP7zBxUR9C_1qbr3HGa3pLoyG9xmWrY';
                            obterImagem = function () { return __awaiter(_this, void 0, void 0, function () {
                                var response, data;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, fetch("https://api.unsplash.com/photos/random?query=academic&client_id=".concat(apiKey))];
                                        case 1:
                                            response = _a.sent();
                                            return [4 /*yield*/, response.json()];
                                        case 2:
                                            data = _a.sent();
                                            return [2 /*return*/, data.urls.regular];
                                    }
                                });
                            }); };
                            return [4 /*yield*/, Promise.all([obterImagem(), obterImagem()])];
                        case 1:
                            _a = _b.sent(), imagem1 = _a[0], imagem2 = _a[1];
                            return [2 /*return*/, new Destaque(imagem1, imagem2)];
                    }
                });
            });
        };
        Destaque.prototype.renderHTML = function () {
            return "<img src=\"".concat(this.imagem1, "\" alt=\"\"><img src=\"").concat(this.imagem2, "\" alt=\"\">");
        };
        return Destaque;
    }());
    UESC.Destaque = Destaque;
    var Resultados = /** @class */ (function () {
        function Resultados(noticias) {
            this.noticias = noticias;
        }
        Resultados.obterNoticias = function () {
            return __awaiter(this, void 0, void 0, function () {
                var response, noticias;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, fetch('https://api.spaceflightnewsapi.net/v3/articles')];
                        case 1:
                            response = _a.sent();
                            return [4 /*yield*/, response.json()];
                        case 2:
                            noticias = _a.sent();
                            return [2 /*return*/, new Resultados(noticias.slice(0, 3))]; // Limitando para 3 artigos
                    }
                });
            });
        };
        Resultados.prototype.truncarTexto = function (texto, limitePalavras) {
            var palavras = texto.split(' ').slice(0, limitePalavras);
            return palavras.length < texto.split(' ').length ? "".concat(palavras.join(' '), " ...") : palavras.join(' ');
        };
        Resultados.prototype.renderHTML = function () {
            var _this = this;
            var noticiasHTML = this.noticias
                .map(function (noticia) { return "<p><strong>".concat(_this.truncarTexto(noticia.title, 10), "</strong><br>").concat(_this.truncarTexto(noticia.summary, 10), "<br><a href=\"").concat(noticia.url, "\">Leia mais</a></p>"); })
                .join('');
            return noticiasHTML;
        };
        return Resultados;
    }());
    UESC.Resultados = Resultados;
})(UESC || (UESC = {}));
document.addEventListener('DOMContentLoaded', function () { return __awaiter(_this, void 0, void 0, function () {
    var error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                return [4 /*yield*/, carregarArtigos()];
            case 1:
                _a.sent();
                return [4 /*yield*/, carregarClima()];
            case 2:
                _a.sent();
                return [4 /*yield*/, carregarDestaque()];
            case 3:
                _a.sent();
                return [4 /*yield*/, carregarNoticias()];
            case 4:
                _a.sent();
                return [3 /*break*/, 6];
            case 5:
                error_1 = _a.sent();
                console.error('Erro:', error_1);
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); });
function carregarArtigos() {
    return __awaiter(this, void 0, void 0, function () {
        var articlesData, articles, artigos, noticiasSection, blocoArticle;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('https://campusdata.uark.edu/apiv2/articles/SearchArticle?$orderby=publishDate+desc&$top=3')];
                case 1:
                    articlesData = _a.sent();
                    return [4 /*yield*/, articlesData.json()];
                case 2:
                    articles = _a.sent();
                    artigos = articles.map(function (a) { return new UESC.Artigo(a.headline, a.id, a.brief); });
                    noticiasSection = document.getElementById('noticias');
                    if (noticiasSection) {
                        blocoArticle = noticiasSection.querySelector('.bloco');
                        if (blocoArticle) {
                            blocoArticle.innerHTML = artigos.map(function (artigo) { return artigo.renderHTML(); }).join('');
                        }
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function carregarClima() {
    var _a, _b, _c, _d;
    return __awaiter(this, void 0, void 0, function () {
        var latitude, longitude, url, climaData, data, currentTemperature, currentHumidity, currentWindSpeed, weatherCode, servicos, servicosSection, blocoArticle;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    latitude = '-14.798104';
                    longitude = '-39.172263';
                    url = "https://api.open-meteo.com/v1/forecast?latitude=".concat(latitude, "&longitude=").concat(longitude, "&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weathercode");
                    return [4 /*yield*/, fetch(url)];
                case 1:
                    climaData = _e.sent();
                    return [4 /*yield*/, climaData.json()];
                case 2:
                    data = _e.sent();
                    currentTemperature = (_a = data.current) === null || _a === void 0 ? void 0 : _a.temperature_2m;
                    currentHumidity = (_b = data.current) === null || _b === void 0 ? void 0 : _b.relative_humidity_2m;
                    currentWindSpeed = (_c = data.current) === null || _c === void 0 ? void 0 : _c.wind_speed_10m;
                    weatherCode = (_d = data.current) === null || _d === void 0 ? void 0 : _d.weathercode;
                    if (currentTemperature !== undefined && currentHumidity !== undefined && currentWindSpeed !== undefined) {
                        servicos = [
                            new UESC.Servico('Condição Atual em Uesc', UESC.Servico.obterEmojiClima(weatherCode), currentTemperature, currentHumidity, currentWindSpeed)
                        ];
                        servicosSection = document.getElementById('servicos');
                        if (servicosSection) {
                            blocoArticle = servicosSection.querySelector('.bloco');
                            if (blocoArticle) {
                                blocoArticle.innerHTML = servicos.map(function (servico) { return servico.renderHTML(); }).join('');
                            }
                        }
                    }
                    else {
                        console.error('Error: Não foi possível obter dados do clima.');
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function carregarDestaque() {
    return __awaiter(this, void 0, void 0, function () {
        var destaque, destaqueHTML, blocoArticle, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, UESC.Destaque.obterImagensAcademicas()];
                case 1:
                    destaque = _a.sent();
                    destaqueHTML = destaque.renderHTML();
                    blocoArticle = document.querySelector('#destaque .bloco');
                    if (blocoArticle) {
                        blocoArticle.innerHTML = destaqueHTML;
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    console.error('Erro ao obter imagens do Unsplash:', error_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function carregarNoticias() {
    return __awaiter(this, void 0, void 0, function () {
        var resultados, blocoArticle, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, UESC.Resultados.obterNoticias()];
                case 1:
                    resultados = _a.sent();
                    blocoArticle = document.querySelector('#resultados .bloco');
                    if (blocoArticle) {
                        blocoArticle.innerHTML = resultados.renderHTML();
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _a.sent();
                    console.error('Erro ao obter notícias:', error_3);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}

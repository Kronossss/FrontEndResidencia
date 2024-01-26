import { Component, OnInit } from '@angular/core';
import { ClimaService } from '../services/clima.service';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css'],
})
export class ServicosComponent implements OnInit {
  clima: any;
  servicos: any[] = [];

  constructor(private climaService: ClimaService) {}

  ngOnInit() {
    this.carregarClima();
  }

  carregarClima() {
    this.climaService.obterClima().subscribe(
      (data: any) => {
        const currentTemperature = data.current?.temperature_2m;
        const currentHumidity = data.current?.relative_humidity_2m;
        const currentWindSpeed = data.current?.wind_speed_10m;
        const weatherCode = data.current?.weathercode;

        if (currentTemperature !== undefined && currentHumidity !== undefined && currentWindSpeed !== undefined) {
          this.servicos = [
            {
              titulo: 'Condição Atual em Uesc',
              icone: this.obterEmojiClima(weatherCode),
              temperatura: currentTemperature,
              umidade: currentHumidity,
              vento: currentWindSpeed,
            },
          ];
        } else {
          console.error('Error: Não foi possível obter dados do clima.');
        }
      },
      (erro: any) => {
        console.error('Erro ao obter dados do clima:', erro);
      }
    );
  }

  obterEmojiClima(codigoClima: number): string {
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

  renderizarServicoHTML(servico: any): string {
    return `<div class="servico">
              <div class="icone">${servico.icone}</div>
              <div class="informacoes">
                <strong>${servico.titulo}</strong>
                <p>${servico.temperatura} °C</p>
                <p>Umidade: ${servico.umidade}</p>
                <p>Vento: ${servico.vento} m/s</p>
              </div>
            </div>`;
  }
}

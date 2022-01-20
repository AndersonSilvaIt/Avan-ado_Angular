import { Component, OnInit } from "@angular/core";
import { Filme } from "./filme";

@Component({
  selector: "app-filmes",
  templateUrl: "./filmes.component.html",
})
export class FilmesComponent implements OnInit {
  filmes: Filme[];

  ngOnInit() {
    this.filmes = [
      {
        nome: "Um sonho de Liberdade",
        dataLancamento: new Date("12/07/1994"),
        valor: 150.00,
        imagem: "sonhoLiberdade.jpg",
        tamanho: "513326980",
      },
      {
        nome: "O Poderoso Chefão",
        dataLancamento: new Date("01/12/1972"),
        valor: 200.00,
        imagem: "sonhoLiberdade.jpg",
        tamanho: "1342177280",
      },
      {
        nome: "Batman: O Cavaleiro das Trevas",
        dataLancamento: new Date("01/08/2008"),
        valor: 70.00,
        imagem: "sonhoLiberdade.jpg",
        tamanho: "719974720",
      },
      {
        nome: "O Poderoso Chefão 2",
        dataLancamento: new Date("12/01/1974"),
        valor: 120.00,
        imagem: "sonhoLiberdade.jpg",
        tamanho: "1254589899",
      },
      {
        nome: "Pulp Fiction: Tempo de Violência",
        dataLancamento: new Date("08/01/1994"),
        valor: 190.00,
        imagem: "sonhoLiberdade.jpg",
        tamanho: "773039680",
      },
    ];
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {
  public products = [
    {
      "codigo": "LAD21-MATCO",
      "nombre": "Bloquelon MATCO",
      "medida": ["Unidad"]
    },
    {
      "codigo": "LAD21-MALLA",
      "nombre": "Malla Electrosoldada",
      "medida": [
        "Rollo/s",
        "Panel/es"
      ]
    },
    {
      "codigo": "LAD21-PERFIL",
      "nombre": "Perfil Entrepiso",
      "medida": ["Metro/s"]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

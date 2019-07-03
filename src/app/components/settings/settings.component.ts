import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  testInterfaces = [
    {
      name: "/dev/inputs",
      keys: [
        {type: "temp", name: "Amb.Temp"},
        {type: "soil", name: "Soil.Q.S1"},
        {type: "soil", name: "Soil.Q.S2"},
        {type: "soil", name: "Soil.Q.S3"},
        {type: "soil", name: "Soil.Q.S4"},
        {type: "water", name: "Water.Level"},
        {type: "humid", name: "Amb.Hum"}
      ]
    },
    {
      name: "/dev/outputs",
      keys: [
        {type: "fan", name: "Fan.Lev1"},
        {type: "fan", name: "Fan.Lev2"},
        {type: "pump", name: "Recirc."},
        {type: "pump", name: "Feed"},
        {type: "valve", name: "Valve.S1"},
        {type: "valve", name: "Valve.S2"},
        {type: "valve", name: "Valve.S3"},
        {type: "valve", name: "Valve.S4"},        
        {type: "light", name: "Light.Lev1"},
        {type: "light", name: "Light.Lev2"}
      ]
    }
  ]


  constructor() { }

  ngOnInit() {
  }

}

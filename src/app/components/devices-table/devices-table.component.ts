import { Component, OnInit } from '@angular/core';
import { DeviceService } from 'src/app/device.service';
import { Device } from 'src/app/models/Device';

@Component({
  selector: 'app-devices-table',
  templateUrl: './devices-table.component.html',
  styleUrls: ['./devices-table.component.css']
})
export class DevicesTableComponent implements OnInit {

  deviceList! : Device[];

  constructor(private deviceService : DeviceService ) { }

  ngOnInit(): void {
 
this.deviceService.getAllDevices().subscribe(result => {
  this.deviceList = result;
})
 }
}

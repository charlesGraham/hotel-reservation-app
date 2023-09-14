import { Component, OnInit } from '@angular/core';
import { Reservation } from '../models/reservation';
import { ReservationService } from '../reservation/reservation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {
  reservations: Reservation[] = [];

  constructor(
    private reservationService: ReservationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.reservations = this.reservationService.getAllReservations();
    console.log(this.reservations);
  }

  deleteReservation(id: string) {
    this.reservationService.deleteReservation(id);
  }

  addReservation() {
    this.router.navigate(['/new']);
  }


}

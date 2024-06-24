import { Component } from '@angular/core';
import { Job } from '../model/job';

@Component({
  selector: 'app-job-card',
  standalone: true,
  imports: [],
  templateUrl: './job-card.component.html',
  styleUrl: './job-card.component.scss'
})
export class JobCardComponent {
  jobs: Job[] = [
    {
      title: "Software Developer II",
      company: "JP Morgan Chase",
      startDate: "June 2023",
      endDate: "Present",
      listOfTasks: ["A", "B", "C"]
    },
    {
      title: "Cybersecurity Engineer",
      company: "Ford Motor Company",
      startDate: "May 2021",
      endDate: "August 2022",
      listOfTasks: ["A", "B", "C"]
    }
  ];

  constructor() {

  }
}

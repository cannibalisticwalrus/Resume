import { Component } from '@angular/core';
import { Job } from '../model/job';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-job-card',
  standalone: true,
  imports: [NgFor],
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
      listOfTasks: [
        "Developed software solutions using Java SpringBoot, AWS RDBS, AWS SQS and Kafka to automate sending letters to customers who have been denied a credit line increase",
        "Provided on-call support for production and testing issues for all applications in the credit and consumer business space",
        "Modernized application by moving our systems from proprietary architecture to the AWS ecosystem",
        "Maintained Unit and Integration tests using JUnit and Cucumber"]
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
    console.log(this.jobs[0]);
  }
}

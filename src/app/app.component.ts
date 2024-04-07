import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent, SizeDirective } from 'ngx-fluent-ui';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonComponent, SizeDirective, NgTemplateOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fluent-ui';
  selected = false;
  disabled = false;
}

import { Component } from '@angular/core';
import { Navigation } from "../../components/navigation/navigation";
import { TranslatePipe } from '@ngx-translate/core';
import { Footer } from "../../components/footer/footer";
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: 'app-legal-notice',
  imports: [Navigation, TranslatePipe, Footer, NgOptimizedImage],
  templateUrl: './legal-notice.html',
  styleUrl: './legal-notice.scss',
})
export class LegalNotice {}

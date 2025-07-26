import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
headerData = {
    title: "انجمن علمی اقتصاد",
    color: "#1E40AF",
    logoImage: "/logo.png",
    englishTitle: "Scientific Economics Association",
    established: "۱۳۹۵",
    navLinks: [
      { title: "صفحه اصلی", href: "/" },
      { title: "درباره ما", href: "/about" },
      { title: "فعالیت‌ها", href: "/activities" },
      { title: "اعضا", href: "/members" },
      { title: "تماس", href: "/contact" }
    ]
  };
}

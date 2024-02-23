import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchBarService } from 'src/app/services/searchbar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public browserAll = [
    { bgColor: 'red', color: 'white', title: 'Music',},
    { bgColor: 'green', color: 'white', title: 'Podcasts' },
    { bgColor: 'purple', color: 'white', title: 'Live Events' },
    { bgColor: 'blue', color: 'white', title: 'Made For You' },
    { bgColor: 'pink', color: 'white', title: 'New Releases' },
    { bgColor: 'lightblue', color: 'white', title: 'Pop' },
    { bgColor: 'orange', color: 'white', title: 'Hip-Hop' },
    { bgColor: 'yellow', color: 'white', title: 'Rock' },
    { bgColor: 'black', color: 'white', title: 'Latin' },
    { bgColor: 'orangered', color: 'white', title: 'Charts' },
    { bgColor: 'darkgray', color: 'white', title: 'Electronic' },
    { bgColor: 'smokewhite', color: 'white', title: 'Indie' },
    { bgColor: 'yellow', color: 'white', title: 'Country' },
    { bgColor: 'red', color: 'white', title: 'R&B' },
    { bgColor: 'pink', color: 'white', title: 'Metal' },
    { bgColor: 'green', color: 'white', title: 'Jazz' }
  ];
  public songCards = [
    {
      song_id: 1,
      thumbnail:
        'https://i.scdn.co/image/ab67706f00000002903cb755363f0aa9cdec5c7f',
      title: 'Gold School',
      description: 'Taking it way back',
      song_link: 'assets/Homecoming.mp3',
    },
    {
      song_id: 2,
      thumbnail:
        'https://i.scdn.co/image/ab67706f00000002b5e5274fbae4bcf84bf57f69',
      title: 'I Love My 90s Hip-Hop',
      description: 'Real rap music from the golden era',
      song_link: 'assets/ElectricRelaxation.mp3',
    },
    {
      song_id: 3,
      thumbnail:
        'https://i.scdn.co/image/ab67706f00000002b504ec3da52f29cfd21df56a',
      title: 'Signed XOXO',
      description: 'Crossing over like Allen I',
      song_link: 'assets/Yeern101.mp3',
    },
    {
      song_id: 4,
      thumbnail:
        'https://lh3.googleusercontent.com/BX7ONNJLWNcVJ8BqOlUARz629GnnPq8JfEsnRxyAncV7-ET0q_TnY2U2WjeVwa5YiGrURvQov7chxQ=w544-h544-l90-rj',
      title: 'Beast Mode Hip-Hop',
      description: 'Energy tracks to get your beast mode on',
      song_link: 'assets/familyties.mp3',
    },
    {
      song_id: 5,
      thumbnail:
        'https://allhiphop.com/wp-content/uploads/2021/06/Feelin-Myself-Cover-Saweetie.jpg',
      title: 'Feelin Myself',
      description: "The hip-hop playlist that's a whole mood",
      song_link: 'assets/america.mp3',
    },
    {
      song_id: 6,
      thumbnail:
        'https://i.scdn.co/image/ab67706f00000002e32dfa47da55dccf6c6b1fe9',
      title: 'Jazz Rap',
      description: 'Laid back cratedigger hip-hop',
      song_link: 'assets/cookiechips.mp3',
    },
    {
      song_id: 7,
      thumbnail:
        'https://i.scdn.co/image/ab67706f00000002899b3c3a6548e1fa4b87ea24',
      title: 'Most Necessary',
      description: 'The official voice of the next generation',
      song_link: '',
    },
    {
      song_id: 8,
      thumbnail:
        'https://i.scdn.co/image/ab67616d00001e021d666b70032c8b4145019154',
      title: 'Laid Back Beats',
      description: 'Tough crowd.',
      song_link: '',
    },
    {
      song_id: 9,
      thumbnail:
        'https://i.scdn.co/image/ab67706c0000da84bbc954de9f3e45fba7ac169c',
      title: 'Internet People',
      description: 'The rap soundtrack to the internet',
      song_link: '',
    },
  ];
  constructor(public sb: SearchBarService) {}

  ngOnInit(): void {}

  onInputFilterRes($event: string) {
    const res = this.browserAll.filter(
      (element) => element.title.toLowerCase() === $event.toLowerCase().trim()
    );
    console.log(res);
  }

  onNavigation(pageName: string) {
    if (pageName === 'search') {
      this.sb.isSearchVisible.next(true);
    } else {
      this.sb.isSearchVisible.next(false);
    }
  }
}

import { Component , OnInit } from '@angular/core';
 
declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit(){
    $('#link1').on('click',function(){
      $(this).addClass('active');
      $('#link2').removeClass('active');
    });
    $('#link2').on('click',function(){
      $(this).addClass('active');
      $('#link1').removeClass('active');
    });
    $('#link2').on('click',function(){
      $('#img').removeClass('image');
      $('#img').addClass('image1');
    });
    $('#link1').on('click',function(){
      $('#img').removeClass('image1');
      $('#img').addClass('image');
    });
  }

  image: string="../assets/image/login1.svg";
  title = 'angular-form';
}

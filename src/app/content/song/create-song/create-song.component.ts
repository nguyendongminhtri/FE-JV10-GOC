import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../../service/category.service";
import {Category} from "../../../model/Category";
import {FormControl, Validators} from "@angular/forms";
import {Song} from "../../../model/Song";
import {SongService} from "../../../service/song.service";

@Component({
  selector: 'app-create-song',
  templateUrl: './create-song.component.html',
  styleUrls: ['./create-song.component.css']
})
export class CreateSongComponent implements OnInit{
  form: any = {};
  listCategory: Category[] = [];
  song?: Song;
  status = 'Form Create Song!'
  validateCategory = new FormControl('', [
    Validators.required
  ])
  constructor(private categoryService: CategoryService,
              private songService: SongService) {
  }
  createSong() {
    if(this.form.category==undefined){
      this.status = 'Please select one Category!'
      return;
    }
    if(this.form.avatar==undefined){
      this.status = 'Please upload avatar Song!'
      return;
    } if(this.form.mp3Url==undefined){
      this.status = 'Please upload file MP3 Song!'
      return;
    }

    this.song = new Song(
      this.form.name,
      this.form.avatar,
      this.form.lyrics,
      this.form.mp3Url,
      this.form.category
    )
    console.log('this.song --->', this.song)
    this.songService.createSongService(this.song).subscribe(data=>{
      if(data.message=='yes'){
        this.status = 'Create Song success!'
      }
    })
  }

  ngOnInit(): void {
    this.categoryService.getListCategory().subscribe(data =>{
      this.listCategory = data;
    })
  }

  onUploadAvatar($event: string) {
    this.form.avatar = $event;
  }

  onUploadFile($event: string) {
    this.form.mp3Url = $event;
  }
}

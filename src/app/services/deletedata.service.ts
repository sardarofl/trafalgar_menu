import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DeletedataService {

  constructor(private http:Http) { }

  deleteEvent(id,eventname,eventlogopath){
    return this.http.delete("/deletes/delete_event/"+id+"/"+eventlogopath)
    .map(res => res.json());
  }

  deleteRoom(id,eventname,roomdefaultlogo){
    return this.http.delete("/deletes/delete_room/"+id+"/"+roomdefaultlogo)
    .map(res => res.json());
  }

  deleteUser(id){
    return this.http.delete("/users/delete_user/"+id)
    .map(res => res.json());
  }

  deleteWebsite(id){
    return this.http.delete("/deletes/delete_from_website/"+id)
    .map(res => res.json());
  }

  deleteProduct(id,category){
    return this.http.delete("/deletes/delete_product/"+id)
    .map(res => res.json());
  }

  deleteGalleryItem(id,name){
    return this.http.delete("/deletes/delete_from_gallery/"+id)
    .map(res => res.json());
  }

}

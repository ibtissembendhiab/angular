import { ArchiveService } from './../../../core/services/archive.service';
import { Component, OnInit} from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  listTab: boolean;
  gridTab: boolean;
  addnewTab: boolean;
  dplistTab: boolean = true;
  dpgridTab: boolean;
  public collection:any= [];
  allfilelist;

  constructor( private service: ArchiveService,
               private toastr:ToastrService) { }

  ngOnInit(): void {

    this.service.getallFilesArchived().subscribe
    (FileList=> {
      console.log(FileList)
      this.allfilelist=FileList;
      this.collection= FileList;
      console.log(this.collection)
    }
    );
  }
  
  restore(file){
  
    location.reload();
    console.log(file)
    this.service.restorefile(file.fileId).subscribe(res=>{});
    this.toastr.success(file.fileName,"Restored");
  }
  
  
  public deleteFile(file) 
  {
    this.collection.splice(file.fileID,1)
    this.service.deleteFile(file).subscribe(FileList=>{
    console.log("File Deleted",FileList),
    this.toastr.success('File Deleted')
    })

  }
  onTab(number) {
    this.dplistTab = false;
    this.dpgridTab = false;
    if (number == '1') {
      this.dplistTab = true;
    }
    else if (number == '2') {
      this.dpgridTab = true;
    }
  }

}

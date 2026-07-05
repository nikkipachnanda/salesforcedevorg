import { LightningElement, wire } from 'lwc';
import createNoteRecord from '@salesforce/apex/NoteTakingController.createNoteRecord'
import getNotes from '@salesforce/apex/NoteTakingController.getNotes'
import updateNoteRecord from '@salesforce/apex/NoteTakingController.updateNoteRecord'
import {refreshApex} from '@salesforce/apex';

const DEFAULT_NOTE_FORM = {
  Name:"",
  Note_Description__c:""
}

export default class Notesappcmp extends LightningElement {
   showModal = false
  noteRecord = DEFAULT_NOTE_FORM
  noteList =[]
  selectedRecordId
  wiredNoteResult
  isLoading = false;



  formats = [
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'list',
    'indent',
    'align',
    'link',
    'clean',
    'table',
    'header',
    'color',
];

get isFormInvalid(){
  return !(this.noteRecord && this.noteRecord.Note_Description__c && this.noteRecord.Name)
}

get ModalName(){
  return this.selectedRecordId ? "Update Note":"Add Note"
}


 @wire(getNotes)
  noteListInfo(result){
    this.wiredNoteResult = result 
    const {data, error} = result
    if(data){
      console.log("data of notes", JSON.stringify(data))
      this.noteList = data.map(item=>{
        let formatedDate = new Date(item.LastModifiedDate).toDateString()
        return {...item, formatedDate}
      })
    }
    if(error){
      console.error("error in fetching", error)
      this.showToastMsg(error.message.body, 'error')
    }
  }




  createNoteHandler(){
    this.showModal = true
  }
  closeModalHandler(){
    this.showModal = false
    this.noteRecord = DEFAULT_NOTE_FORM
    this.selectedRecordId = null
  }

  changeHandler(event){
    const {name, value} = event.target
    // const name = event.target.name
    // const value = event.target.value
    this.noteRecord={...this.noteRecord, [name]:value}
  }
  formSubmitHandler(event){
    event.preventDefault();
    this.isLoading = true;
    if(this.selectedRecordId){
        this.updateNote(this.selectedRecordId);
    } else {
        this.createNote();
    }
}


  createNote(){
    createNoteRecord({
        title: this.noteRecord.Name,
        description: this.noteRecord.Note_Description__c
    }).then(() => {
        this.showToastMsg("Note Created Successfully!!", 'success');
        this.refresh();
        this.closeModalHandler();
    }).catch(error => {
        console.error("error", error.message.body);
        this.showToastMsg(error.message.body, 'error');
    }).finally(() => {
        this.isLoading = false;
    });
}


  showToastMsg(message, variant){
    const elem = this.template.querySelector('c-notesappnotification')
    if(elem){
      elem.showToast(message, variant)
    }
  }

  editNoteHandler(event){
    const {recordid} = event.target.dataset
    const noteRecord = this.noteList.find(item=>item.Id === recordid)
    this.noteRecord = {
      Name:noteRecord.Name,
      Note_Description__c:noteRecord.Note_Description__c
    }
    this.selectedRecordId = recordid
    this.showModal = true
 }

 updateNote(noteId){
  const { Name, Note_Description__c } = this.noteRecord;
  updateNoteRecord({
      noteId,
      title: Name,
      description: Note_Description__c
  }).then(() => {
      this.showToastMsg("Note Updated Successfully!!", 'success');
      this.refresh();
      this.closeModalHandler();
  }).catch(error => {
      console.error("error in updating", error);
      this.showToastMsg(error.message.body, 'error');
  }).finally(() => {
      this.isLoading = false; // ✅ important!
  });
}


 refresh(){
  return refreshApex(this.wiredNoteResult)
 }
}
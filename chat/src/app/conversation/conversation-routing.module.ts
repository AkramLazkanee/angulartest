import { ConvoComponent } from "./convo/convo.component";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

const routes: Routes = [
    // {path: 'conversation', component: ConvoComponent},
    // {path: 'conversation/:id', component: ConvoComponent},
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ConversationRoutingModule { }
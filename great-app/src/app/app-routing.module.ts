import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {ArticleComponent} from './article/article.component';
import {AboutComponent} from './about/about.component';
import {MoreInfoComponent} from './more-info/more-info.component';

const routes: Routes = [

{path: '' , component:HomeComponent	},
{path: 'figure/:id ' , component:ArticleComponent	},
{path: 'about' , component:AboutComponent	},
{path: 'moreinfo' , component:MoreInfoComponent	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

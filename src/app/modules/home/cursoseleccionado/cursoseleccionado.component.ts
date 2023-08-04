import { Component, OnInit } from '@angular/core';
import { Firestore, collection, collectionData, query, where, getDocs } from '@angular/fire/firestore';
import {  Observable } from 'rxjs';
import { CursosService } from '../../../services/cursos.service';
import { Auth } from '@angular/fire/auth';
import { ActivatedRoute } from '@angular/router';
import { Cursos } from 'src/app/interfaces/cursos.interface';

@Component({
  selector: 'app-cursoseleccionado',
  templateUrl: './cursoseleccionado.component.html',
  styleUrls: ['./cursoseleccionado.component.css']
})
export class CursoseleccionadoComponent implements OnInit {

  productosCollection: any;
  productos$: Observable<Cursos[]>;

  constructor(private route: ActivatedRoute, private cursosService: CursosService, private firestore: Firestore, private auth: Auth) { 
    this.productosCollection = collection(firestore, 'cursos');
    this.productos$ = collectionData(this.productosCollection) as Observable<Cursos[]>;
  }


  cursos : Cursos[] = [];
  productoSeleccionado: Cursos | undefined;


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const productId = params['id'];
      const productosCollectionRef = collection(this.firestore, 'cursos');
      const q = query(productosCollectionRef, where('id', '==', productId));

      getDocs(q).then(querySnapshot => {
        const productos: Cursos[] = [];
        querySnapshot.forEach(doc => {
          const data = doc.data() as Cursos;
          productos.push(data);
        });

        this.productos$ = new Observable<Cursos[]>(observer => {
          observer.next(productos);
          observer.complete();
        });

        this.productos$.subscribe(productos => {
          console.log(productos);
        });
      });
    });
  }
}

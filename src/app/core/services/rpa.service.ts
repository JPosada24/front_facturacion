import { Injectable, inject } from '@angular/core';
import { environments } from '../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InfoRpa, ListadoRpa } from '../interfaces/rpa.interface';

@Injectable({
	providedIn: 'root',
})
export class RpaService {
	private baseUrl: string = environments.baseUrl;

	constructor() {}

	private http = inject(HttpClient);

	public getRpas(): Observable<InfoRpa> {
		return this.http.get<InfoRpa>(`${this.baseUrl}/listadoRpa`);
	}
}

export interface Metadatum {
    descripcion: string;
    tipo:        string;
    codigo:      string;
}

export interface ListadoRpa {
    id_rpa:              number;
    nombre_rpa:          string;
    estado_rpa:          string;
    id_tipo_rpa_listado: string;
}

export interface InfoRpa {
    metadata:     Metadatum[];
    listado_rpas: ListadoRpa[];
}

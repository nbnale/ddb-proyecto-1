use RED_EDUCATIVA

var arr_personal = [];
for (var i = 0; i < 5; i++) {
    arr_personal[i] = new ObjectId();
}

db.createCollection("personal_universitario")
db.personal_universitario.insertMany(
    [
        {
            "_id": arr_personal[0],
            "nombre": "Archibald",
            "apellidos": "Sawyer Kaer",
            "fec_nac": ISODate("1996-07-09"),
            "nacionalidad": "China",
            "dir_residencia": "634 North Park",
            "profesion": "VP Accounting",
            "fec_ingreso": ISODate("2016-10-09"),
            "correo": "asawyer0@guardian.co.uk",
            "telefonos": [
                "8567337929",
                "42342342389"
            ]
        },
        {
            "_id": arr_personal[1],
            "nombre": "Sheff",
            "apellidos": "Gohn Ibra",
            "fec_nac": ISODate("2004-10-15"),
            "nacionalidad": "Indonesia",
            "dir_residencia": "2370 North Terrace",
            "profesion": "Systems Administrator I",
            "fec_ingreso": ISODate("2012-07-27"),
            "correo": "sgohn1@imgur.com",
            "telefonos": [
                "7534679747"
            ]
        },
        {
            "_id": arr_personal[2],
            "nombre": "Frannie",
            "apellidos": "Locksley Sanchez",
            "fec_nac": ISODate("1999-07-17"),
            "nacionalidad": "Colombia",
            "dir_residencia": "247 Vermont Junction",
            "profesion": "Research Associate",
            "fec_ingreso": ISODate("2011-08-19"),
            "correo": "flocksley2@dedecms.com",
            "telefonos": [
                "5219562975"
            ]
        },
        {
            "_id": arr_personal[3],
            "nombre": "Justinn",
            "apellidos": "Lardnar Varela",
            "fec_nac": ISODate("1991-10-05"),
            "nacionalidad": "Syria",
            "dir_residencia": "6 Pond Center",
            "profesion": "Social Worker",
            "fec_ingreso": ISODate("2019-01-11"),
            "correo": "jlardnar3@paginegialle.it",
            "telefonos": [
                "8294692956",
                "4234238978",
                "29887637824"
            ]
        },
        {
            "_id": arr_personal[4],
            "nombre": "Bert",
            "apellidos": "Trevers Garro",
            "fec_nac": ISODate("1998-05-14"),
            "nacionalidad": "Ukraine",
            "dir_residencia": "3 Eggendart Street",
            "profesion": "Senior Quality Engineer",
            "fec_ingreso": ISODate("2018-10-28"),
            "correo": "btrevers4@foxnews.com",
            "telefonos": [
                "5279745313"
            ]
        }
    ])

var arr_estudiantes = [];
for (var i = 0; i < 5; i++) {
    arr_estudiantes[i] = new ObjectId();
}

db.createCollection("estudiantes")
db.estudiantes.insertMany(
    [
        {
            "_id": arr_estudiantes[0],
            "nombre": "Sharl",
            "apellidos": "Kenworthey Solano",
            "fec_nac": ISODate("2004-06-21"),
            "nacionalidad": "Indonesia",
            "dir_residencia": "90924 Packers Court",
            "correo": "skenworthey0@google.it",
            "telefonos": ["7153546502", "423423489789", "8974982789"]
        },
        {
            "_id": arr_estudiantes[1],
            "nombre": "Emilie",
            "apellidos": "McCome Barboza",
            "fec_nac": ISODate("2002-11-27"),
            "nacionalidad": "Sweden",
            "dir_residencia": "0 International Pass",
            "correo": "emccome1@wufoo.com",
            "telefonos": ["3651021540"]
        },
        {
            "_id": arr_estudiantes[2],
            "nombre": "Cara",
            "apellidos": "Bengochea Bonilla",
            "fec_nac": ISODate("1991-08-20"),
            "nacionalidad": "Philippines",
            "dir_residencia": "500 Northport Street",
            "correo": "cbengochea2@census.gov",
            "telefonos": ["4893912491"]
        },
        {
            "_id": arr_estudiantes[3],
            "nombre": "Guthrie",
            "apellidos": "Cusack Gamboa",
            "fec_nac": ISODate("2004-02-26"),
            "nacionalidad": "Canada",
            "dir_residencia": "0518 Gina Lane",
            "correo": "gcusack3@gmpg.org",
            "telefonos": ["2456797332", "4234234239"]
        },
        {
            "_id": arr_estudiantes[4],
            "nombre": "Ulick",
            "apellidos": "Duthie Mora",
            "fec_nac": ISODate("1994-01-16"),
            "nacionalidad": "Indonesia",
            "dir_residencia": "377 Elka Terrace",
            "correo": "uduthie4@oracle.com",
            "telefonos": ["8445433625", "42342342389"]
        }
    ])

var arr_anexos = [];
for (var i = 0; i < 5; i++) {
    arr_anexos[i] = new ObjectId();
}

db.createCollection("anexos")
db.anexos.insertMany([
    {
        "_id": arr_anexos[0],
        "archivo": BinData(0, "xzczadafsdf423423423")
    },
    {
        "_id": arr_anexos[1],
        "archivo": BinData(0, "qeserqwfsdf423423423")
    },
    {
        "_id": arr_anexos[2],
        "archivo": BinData(0, "dasdfddafsdf42342342")
    },
    {
        "_id": arr_anexos[3],
        "archivo": BinData(0, "aaaaadafsdf423423423")
    },
    {
        "_id": arr_anexos[4],
        "archivo": BinData(0, "bbbaadafsdf423423423")
    }
])

var arr_proyectos = [];
for (var i = 0; i < 1; i++) {
    arr_proyectos[i] = new ObjectId();
}

db.createCollection("proyectos")
db.proyectos.insertOne(
    {
        "_id": arr_proyectos[0],
        "responsable": arr_personal[0],
        "participantes": [
            arr_estudiantes[0],
            arr_estudiantes[1]
        ],
        "areas_disciplinares": ["fsdfsd", "fsdfdsf", "hckdkkd"],
        "objetivos": ["kjlkjlkio", "qerwrewqrw", "ewrweiuoiuii"],
        "indic_logro": ["klkklsfsdfsd", "fsdfsdf"],
        "fec_inicio": ISODate("2020-01-01T00:00:00.000+0000"),
        "fec_final": ISODate("2022-03-11T00:00:00.000+0000"),
        "financieros": [
            {
                "tipo_actividad": "ewqrqwerweq qwerewr",
                "costo": 0
            }
        ],
        "recursos_humanos": [
            {
                "habilidad": "dsfsdkljlkdf sdfskldfsdf"
            }
        ],
        "recu_fisi_tecno": [
            {
                "tipo_rec": "Tecnologico",
                "tipo": "Computadora",
                "cantidad": 3
            }
        ],
        "anexos": [arr_anexos[0], arr_anexos[4]]
    })

var arr_evaluaciones = [];
for (var i = 0; i < 2; i++) {
    arr_evaluaciones[i] = new ObjectId();
}

db.createCollection("evaluaciones")
db.evaluaciones.insertMany(
    [{
        "_id": arr_evaluaciones[0],
        "evaluadores": [
            arr_personal[3],
            arr_personal[1]
        ],
        "fec_evaluacion": ISODate("2020-01-01"),
        "proyecto": arr_proyectos[0],
        "informe": "dsflklsdflksdjfklkldkl fsdjfklsdjlkfjskld fjlsd jkflsdkljfskl",
        "notas": [4, 6]
    },
    {
        "_id": arr_evaluaciones[1],
        "evaluadores": [
            arr_personal[0],
            arr_personal[2]
        ],
        "fec_evaluacion": ISODate("2022-03-04"),
        "proyecto": arr_proyectos[0],
        "informe": "rwerrwerwer fjrwerwerfsdfsdfsdlsd jkflrwuoiuopuoipwererwersdkljfskl",
        "notas": [9, 10]
    }])

var arr_grupos = [];
for (var i = 0; i < 1; i++) {
    arr_grupos[i] = new ObjectId();
}

db.createCollection("grupos_colaborativos")
db.grupos_colaborativos.insertOne(
    {
        "_id": arr_grupos[0],
        "participantes": [
            arr_estudiantes[1],
            arr_personal[3],
            arr_personal[4]
        ],
        "objetivo": "fsdfsdklfklkljlksdlkf jskldflksdklf sdklf",
        "actividades": [
            "sdfsdfsdjkfhkjlsdhfjklsd sldkfjlksdfklsdf",
            "rioweuroweuori wueoir uoiweuroiweoir uiowerowe",
            "riweuorweoi oiioeuroiweuoir jfskldjlkgo9ioiuio oiuoioi"
        ],
        "financieros": [
            {
                "tipo_actividad": "fsdfsdfsdfsdf",
                "costo": 0
            }
        ],
        "recursos_humanos": [
            {
                "habilidad": "fdsdfsdfsdfsdfsdfsd"
            }
        ],
        "recu_fisi_tecno": [
            {
                "tipo_rec": "Fisico",
                "tipo": "Silla",
                "cantidad": 10
            }
        ],
        "estado": "Activo",
        "anexos": [arr_anexos[1], arr_anexos[2], arr_anexos[3]]
    })
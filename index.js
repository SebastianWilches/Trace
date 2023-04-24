//                         Referencias HTML
const continenteOrigen = document.getElementById('continente');
const serverOrigen = document.getElementById('serverOrigen');
const serverDestino = document.getElementById('serverDestino');
const buttonGraficar = document.getElementById('buttonGraficar');

const infoDireccionInicial = document.getElementById('infoDireccionInicial');
const infoHops = document.getElementById('infoHops');
const infoDireccionIp = document.getElementById('infoDireccionIp');
const infoPromedioRespuesta = document.getElementById('infoPromedioRespuesta');
const infoDireccionFinal = document.getElementById('infoDireccionFinal');


let statusF = true;
let lat;
let lon;
let hops;
let latitudes = [];
let longitudes = [];


//                          Data
const pingServers = {
    'Local': {
        'Bogotá': {
            'www.wikipedia.com': {
                IPAddress: '2620:0:861:ed1a::1',
                breaks: [
                    '2800:e2:5a80:1629:8e61:a3ff:fe6b:211a',
                    '2800:e0::10:cb1e:7',
                    '2800:e0::10:cb1e:7',
                    '2800:e0::10:cb1e:6',
                    '2800:e0::10:17:a',
                    '2800:e0::10:19:b',
                    '2800:e0::99:106:b',
                    '2001:504:0:2:0:1:4907:1',
                    '2620:0:861:ed1a::1',
                ],
                averageResponseTime: '37 ms',
            },
            'www.tiktok.com': {
                IPAddress: '2.19.172.198',
                breaks: [
                    '192.168.1.254',
                    '10.166.12.41',
                    '10.166.12.41',
                    '10.166.12.42',
                    '10.44.11.0',
                    '200.24.33.196',
                    '200.24.33.35',
                    '192.168.192.3',
                    '192.168.194.11',
                    '2.19.172.198',
                ],
                averageResponseTime: '13.6 ms',
            },
            'www.reddit.com': {
                IPAddress: '199.232.49.140',
                breaks: [
                    '192.168.1.254',
                    '10.166.12.41',
                    '10.166.12.41',
                    '10.166.12.42',
                    '10.44.11.0',
                    '200.24.33.196',
                    '200.25.30.146',
                    '200.25.51.182',
                    '200.25.51.220',
                    '200.25.85.137',
                    '199.232.49.140',
                ],
                averageResponseTime: '13.4 ms',
            },
        }
    },
    'Norte América': {
        'New York': {
            'www.wikipedia.com': {
                IPAddress: '208.80.154.224',
                breaks: [
                    '72.9.99.137',
                    '72.9.111.132',
                    '74.91.10.82',
                    '204.145.67.65',
                    '108.60.147.109',
                    '205.251.126.90',
                    '205.251.127.4',
                    '108.60.151.223',
                    '205.251.127.69',
                    '66.231.176.10',
                    '206.126.236.106',
                    '208.80.154.224',
                ],
                averageResponseTime: '7.5 ms',
            },
            'www.tiktok.com': {
                IPAddress: '104.126.118.200',
                breaks: [
                    '72.9.99.137',
                    '72.9.111.132',
                    '74.91.10.82',
                    '204.145.67.65',
                    '108.60.147.109',
                    '208.68.168.150',
                    '205.251.126.70',
                    '198.32.160.47',
                    '104.126.118.200',
                ],
                averageResponseTime: '3.2 ms',
            },
            'www.reddit.com': {
                IPAddress: '151.101.1.140',
                breaks: [
                    '72.9.99.137',
                    '72.9.111.132',
                    '72.9.111.130',
                    '38.104.189.97',
                    '154.24.67.33',
                    '154.54.84.213',
                    '154.54.83.202',
                    '38.104.44.114',
                    '151.101.1.140',
                ],
                averageResponseTime: '30.6 ms',
            },
        },
        'Los angeles': {
            'www.wikipedia.com': {
                IPAddress: '198.35.26.96',
                breaks: [
                    '98.143.158.201',
                    '96.44.180.225',
                    '69.12.69.1',
                    '213.248.71.105',
                    '62.115.119.90',
                    '80.239.192.66',
                    '198.35.26.96',
                ],
                averageResponseTime: '10.75 ms',
            },
            'www.tiktok.com': {
                IPAddress: '23.72.90.18',
                breaks: [
                    '98.143.158.201',
                    '96.44.180.227',
                    '69.12.69.2',
                    '206.223.123.76',
                    '192.168.224.129',
                    '192.168.225.133',
                    '23.72.90.18',
                ],
                averageResponseTime: '6.71 ms',
            },
            'www.reddit.com': {
                IPAddress: '151.101.65.140',
                breaks: [
                    '98.143.158.201',
                    '96.44.180.225',
                    '69.12.69.1',
                    '213.248.71.105',
                    '62.115.161.85',
                    '151.101.65.140',
                ],
                averageResponseTime: '2.33 ms',
            },
        },
    },
    'Centro América': {
        'Guadalajara': {
            'www.wikipedia.com': {
                IPAddress: '208.80.153.224',
                breaks: [
                    '143.255.58.129',
                    '187.188.69.249',
                    '10.190.41.192',
                    '10.180.54.68',
                    '206.223.118.197',
                    '208.80.153.212',
                    '208.80.153.224',
                ],
                averageResponseTime: '17 ms',
            },
            'www.tiktok.com': {
                IPAddress: '23.64.121.121',
                breaks: [
                    '143.255.58.129',
                    '187.188.69.249',
                    '10.180.55.92',
                    '10.180.200.173',
                    '10.180.200.218',
                    '189.203.67.253',
                    '23.64.121.121',
                ],
                averageResponseTime: '7.7 ms',
            },
            'www.reddit.com': {
                IPAddress: '151.101.1.140',
                breaks: [
                    '143.255.58.129',
                    '38.30.20.9',
                    '154.54.84.98',
                    '154.54.47.45',
                    '154.54.44.230',
                    '154.54.80.118',
                    '38.140.204.170',
                    '151.101.1.140',
                ],
                averageResponseTime: '19.75 ms',
            },
        },        
    },
    'Sur América': {
        'Buenos Aires': {
            'www.wikipedia.com': {
                IPAddress: '208.80.154.224',
                breaks: [
                    '168.205.95.1',
                    '10.255.15.1',
                    '201.216.205.198',
                    '10.246.33.6',
                    '190.210.118.162',
                    '200.51.217.105',
                    '81.173.106.61',
                    '213.140.39.118',
                    '94.142.117.152',
                    '176.52.248.55',
                    '94.142.107.159',
                    '4.16.71.246',
                    '208.80.154.224',
                ],
                averageResponseTime: '47.2 ms',
            },
            'www.tiktok.com': {
                IPAddress: '184.31.2.18',
                breaks: [
                    '168.205.95.1',
                    '10.255.15.1',
                    '104.119.46.50',
                    '104.119.46.19',
                    '184.31.2.18',
                ],
                averageResponseTime: '3 ms',
            },
            'www.reddit.com': {
                IPAddress: '151.101.1.140',
                breaks: [
                    '168.205.95.1',
                    '10.255.15.1',
                    '200.0.17.225',
                    '4.69.220.10',
                    '8.243.134.106',
                    '151.101.1.140',
                ],
                averageResponseTime: '2.5 ms',
            },
        },
        'Sao Paulo': {
            'www.wikipedia.com': {
                IPAddress: '208.80.154.224',
                breaks: [
                    '185.50.105.195',
                    '109.200.219.16',
                    '8.243.159.229',
                    '4.16.71.246',
                    '208.80.154.224',
                ],
                averageResponseTime: '55 ms',
            },
            'www.tiktok.com': {
                IPAddress: '2.20.196.51',
                breaks: [
                    '185.50.105.195',
                    '109.200.219.21',
                    '200.15.2.245',
                    '213.140.53.50',
                    '2.20.196.51',
                ],
                averageResponseTime: '1.2 ms',
            },
            'www.reddit.com': {
                IPAddress: '151.101.129.140',
                breaks: [
                    '185.50.105.195',
                    '187.16.223.64',
                    '103.244.50.180',
                    '151.101.129.140',
                ],
                averageResponseTime: '1 ms',
            },
        },     
    },
    'Europa': {
        'Paris': {
            'www.wikipedia.com': {
                IPAddress: '185.15.58.224',
                breaks: [
                    '195.154.28.1',
                    '51.158.3.28',
                    '51.158.3.244',
                    '213.248.90.20',
                    '62.115.125.116',
                    '62.115.124.57',
                    '185.15.58.143',
                    '185.15.58.143',
                    '185.15.58.224',
                ],
                averageResponseTime: '6.5 ms',
            },
            'www.tiktok.com': {
                IPAddress: '23.192.237.155',
                breaks: [
                    '195.154.28.1',
                    '51.158.3.26',
                    '51.158.3.230',
                    '37.49.237.180',
                    '64.125.29.94',
                    '64.125.27.171',
                    '213.161.73.38',
                    '23.192.237.155',
                ],
                averageResponseTime: '1.25 ms',
            },
            'www.reddit.com': {
                IPAddress: '151.101.1.140',
                breaks: [
                    '195.154.28.1',
                    '51.158.3.26',
                    '51.158.3.226',
                    '212.3.235.201',
                    '212.162.47.218',
                    '151.101.1.140',
                ],
                averageResponseTime: '2 ms',
            },
        },
        'Amsterdam': {
            'www.wikipedia.com': {
                IPAddress: '91.198.174.192',
                breaks: [
                    '5.79.88.28',
                    '81.17.33.128',
                    '31.31.39.62',
                    '31.31.34.127',
                    '31.31.36.99',
                    '130.244.6.250',
                    '91.198.174.254',
                    '91.198.174.192',
                ],
                averageResponseTime: '1 ms',
            },
            'www.tiktok.com': {
                IPAddress: '2.16.238.23',
                breaks: [
                    '5.79.88.29',
                    '81.17.33.134',
                    '195.219.4.66',
                    '2.16.238.23',
                ],
                averageResponseTime: '2.5 ms',
            },
            'www.reddit.com': {
                IPAddress: '151.101.129.140',
                breaks: [
                    '5.79.88.29',
                    '81.17.33.134',
                    '62.115.48.205',
                    '62.115.117.114',
                    '62.115.137.65',
                    '62.115.151.159',
                    '151.101.129.140',
                ],
                averageResponseTime: '1 ms',
            },
        },     
    },
    'Oceania': {
        'Sydney': {
            'www.wikipedia.com': {
                IPAddress: '103.102.166.224',
                breaks: [
                    '221.121.154.216',
                    '118.127.7.98',
                    '100.64.105.8',
                    '203.26.198.15',
                    '100.64.120.125',
                    '203.26.198.28',
                    '202.60.93.169',
                    '103.200.13.189',
                    '202.177.40.20',
                    '103.16.102.187',
                    '103.102.166.224',
                ],
                averageResponseTime: '34.36 ms',
            },
            'www.tiktok.com': {
                IPAddress: '23.206.199.10',
                breaks: [
                    '221.121.154.216',
                    '118.127.7.98',
                    '100.64.105.19',
                    '100.64.105.7',
                    '100.64.120.133',
                    '114.31.192.46',
                    '103.1.76.149',
                    '114.31.196.47',
                    '23.56.129.16',
                    '23.56.129.149',
                    '23.206.199.10',
                ],
                averageResponseTime: '36.5 ms',
            },
            'www.reddit.com': {
                IPAddress: '151.101.29.140',
                breaks: [
                    '221.121.154.216',
                    '118.127.7.98',
                    '100.64.105.8',
                    '203.26.198.15',
                    '100.64.120.125',
                    '203.26.198.28',
                    '203.26.198.45',
                    '202.77.88.16',
                    '49.255.111.206',
                    '151.101.29.140',
                ],
                averageResponseTime: '5.2 ms',
            },
        },
        'Adelaide': {
            'www.wikipedia.com': {
                IPAddress: '103.102.166.224',
                breaks: [
                    '103.216.222.15',
                    '103.216.222.6',
                    '103.216.222.7',
                    '154.18.100.65',
                    '154.54.88.138',
                    '154.54.87.210',
                    '62.115.11.140',
                    '62.115.148.77',
                    '103.102.166.224',
                ],
                averageResponseTime: '106.6 ms',
            },
            'www.tiktok.com': {
                IPAddress: '23.206.199.9',
                breaks: [
                    '103.216.222.6',
                    '103.216.222.2',
                    '23.206.199.9',
                ],
                averageResponseTime: '6.2 ms',
            },
            'www.reddit.com': {
                IPAddress: '151.101.1.140',
                breaks: [
                    '103.216.222.6',
                    '103.136.101.29',
                    '151.101.1.140',
                ],
                averageResponseTime: '92.8 ms',
            },
        },
    },
    'Africa': {
        'El Cairo': {
            'www.wikipedia.com': {
                IPAddress: '208.80.154.224',
                breaks: [
                    '213.170.143.65',
                    '213.158.180.56',
                    '10.29.6.109',
                    '212.133.4.229',
                    '4.16.71.246',
                    '208.80.154.224',
                ],
                averageResponseTime: '47.7 ms',
            },
            'www.tiktok.com': {
                IPAddress: '2.23.154.136',
                breaks: [
                    '213.170.143.65',
                    '213.158.180.56',
                    '10.29.6.117',
                    '212.133.4.209',
                    '4.69.162.221',
                    '213.242.65.6',
                    '23.210.57.40',
                    '95.100.192.105',
                    '23.210.60.35',
                    '23.210.60.131',
                    '2.23.154.136',
                ],
                averageResponseTime: '60 ms',
            },
            'www.reddit.com': {
                IPAddress: '151.101.45.140',
                breaks: [
                    '213.170.143.65',
                    '213.158.180.56',
                    '10.29.6.109',
                    '212.133.4.229',
                    '4.69.209.74',
                    '4.32.36.118',
                    '151.101.45.140',
                ],
                averageResponseTime: '70.5 ms',
            },
        },
        'Johannesburg': {
            'www.wikipedia.com': {
                IPAddress: '185.15.58.224',
                breaks: [
                    '172.107.92.17',
                    '10.11.21.1',
                    '206.249.1.17',
                    '154.54.40.93',
                    '62.115.9.28',
                    '62.115.124.57',
                    '62.115.147.133',
                    '185.15.58.143',
                    '185.15.58.224',
                ],
                averageResponseTime: '101.6 ms',
            },
            'www.tiktok.com': {
                IPAddress: '23.52.67.96',
                breaks: [
                    '172.107.92.17',
                    '10.11.21.1',
                    '196.60.8.212',
                    '23.52.67.96',
                ],
                averageResponseTime: '7 ms',
            },
            'www.reddit.com': {
                IPAddress: '151.101.1.140',
                breaks: [
                    '169.150.238.30',
                    '193.251.152.55',
                    '193.251.144.88',
                    '151.101.1.140',
                ],
                averageResponseTime: '0.2 ms',
            },
        },
    },
};


//                          Mapear opciones
const continenteOptions = () => {

    let continentes = Object.keys(pingServers);
    // console.log(continentes);
    for (let i = 0; i < continentes.length; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.text = continentes[i];

        continenteOrigen.appendChild(option);
    }
}
continenteOptions();

const origenOptions = () => {
    opcionContinente = continenteOrigen.value;
    // console.log('Opcion continente:',opcionContinente);

    for (let i = (serverOrigen.options.length - 1); i >= 1; i--) {
        serverOrigen.remove(i);
    }


    let continentesFiltro = Object.values(pingServers);
    let servidorOrigenFiltro = Object.keys(continentesFiltro[opcionContinente]);
    // console.log('ContinentesFiltro', continentesFiltro);
    // console.log('servidorOrigenFiltro', servidorOrigenFiltro);

    for (let i = 0; i < servidorOrigenFiltro.length; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.text = servidorOrigenFiltro[i];
        serverOrigen.appendChild(option);
    }
}

const destinoOptions = () => {
    opcionServidor = serverOrigen.value;

    for (let i = (serverDestino.options.length - 1); i >= 1; i--) {
        serverDestino.remove(i);
    }


    let continentesFiltro = Object.values(pingServers);
    let servidorOrigenFiltro = continentesFiltro[opcionContinente];
    let ipFiltroObject = Object.values(servidorOrigenFiltro);
    let ipFiltro = Object.keys(ipFiltroObject[opcionServidor])

    // console.log(ipFiltroObject);

    for (let i = 0; i < ipFiltro.length; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.text = ipFiltro[i];
        serverDestino.appendChild(option);
    }



}
//                                  Inicialización mapa
let map = L.map('map').setView([-24.93, -78.57], 2);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let myIcon = L.icon({
    iconUrl: './assets/antena-parabolica.png',
    iconSize: [32, 32]
});

//                                  Trazar rutas mapa
const changeMapPosition = (option) => {

    let opcionContinente = continenteOrigen.value;
    let opcionOrigen = serverOrigen.value;
    let opcionDestino = serverDestino.value;

    let continentes = Object.values(pingServers);
    let servidorOrigen = Object.values(continentes[opcionContinente]);
    let direcciones = Object.values(servidorOrigen[opcionOrigen]);

    let direccion = direcciones[opcionDestino];
    console.log('INFO', direccion);

    let IP = direccion.IPAddress;
    hops = direccion.breaks

    //Actualizar información de la tabla
    infoDireccionInicial.innerText = direccion.breaks[1]
    infoHops.innerText = direccion.breaks.length
    infoDireccionIp.innerText = direccion.breaks[0]
    infoPromedioRespuesta.innerText = direccion.averageResponseTime
    infoDireccionFinal.innerText = direccion.IPAddress


    // Volver a renderizar el mapa
    map.off();
    map.remove();
    map = L.map('map').setView([-24.93, -78.57], 3);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    convertDirectionToCoordinates(IP);
}

const getAddress = async (direccion) => {
    let res;
    let data;
    try {
        res = await fetch(`http://ip-api.com/json/${direccion}`);
        data = await res.json();
        // lat = data.latitude;
        // lon = data.longitude;
        lat = data.lat;
        lon = data.lon;
        // console.log('Valores del API:' + lat + " " + lon);
        if (lat == undefined || lon == undefined) {
            statusF = false;
        } else {
            statusF = true;
        }
    } catch (error) {
        console.log(error);
        alert('Something went wrong, cannot get the address!');
        statusF = false;
    }
}

const convertDirectionToCoordinates = async (IP) => {
    await getAddress(IP);
    if (statusF == true) {
        let coordenadas = [lat, lon];
        map.flyTo(coordenadas, 2);
        await graficarHops();
    } else {
        alert('Something went wrong!');
    }
};


const graficarHops = async () => {
    for (i = 0; i < hops.length; i++) {
        await getAddress(hops[i]);
        if (statusF == true) {
            latitudes.push(lat);
            longitudes.push(lon);
            L.marker([lat, lon], { icon: myIcon }).addTo(map);
            if (i != 0) {
                if (hops[i - 1] != 0) {
                    let ruta = [
                        [latitudes[i - 1], longitudes[i - 1]],
                        [latitudes[i], longitudes[i]]
                    ];
                    L.polyline(ruta, { color: 'green' }).addTo(map);
                }
            }
        } else {
            hops[i] = 0;
            latitudes.push(0);
            longitudes.push(0);
        }
    }

    statusF = true;
    lat = '';
    lon = '';
    hops = [];
    latitudes = [];
    longitudes = [];
}




//                                  Eventos
continenteOrigen.addEventListener('change', origenOptions);
serverOrigen.addEventListener('change', destinoOptions);
buttonGraficar.addEventListener('click', changeMapPosition);
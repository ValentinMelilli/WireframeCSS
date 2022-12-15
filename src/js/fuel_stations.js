// Create full station icon
function createFuelStation(name, position, data) {
    let prices = '';

    Object.keys(data).forEach(fuel => {
        prices += `<div class="flex flex-row"><span class="flex-auto">${fuel}</span><span class="flex-none">${data[fuel]}€ / L</span></div>`;
    })

    L.marker(position, {icon: gasPumpIcon}).addTo(map).bindPopup(`<div class="flex flex-col"><span class="font-bold">${name}</span><div class="flex flex-col">${prices}</div></div>`, {
        className: '[&>.leaflet-popup-content-wrapper]:p-2'
    });
}

// Fake fuel station data
const fuelStations = [
    {
        name: 'Station My Digital School',
        position: [43.635440402557585, 3.8295010484601084],
        data: {
            'Gazole': 1.809,
            'SP96': 1.673,
            'E10': 1.602,
            'SP98': 1.683
        }
    },
    {
        name: 'L\'unique station de Paris',
        position: [48.88319181347766, 2.3408668802618333],
        data: {
            'Gazole': 1.048,
            'SP96': 1.942,
            'E10': 1.266,
            'SP98': 1.543
        }
    },
    {
        name: 'La station bretonne mais pas bretonne',
        position: [47.16400118644361, -1.5043479431750306],
        data: {
            'Gazole': 1.719,
            'SP96': 1.532,
            'E10': 1.845,
            'SP98': 1.261
        }
    },
    {
        name: 'Une station sans nom',
        position: [43.584824149879246, 1.418015321799988],
        data: {
            'Gazole': 1.562,
            'SP96': 1.832,
            'E10': 1.365,
            'SP98': 1.657
        }
    },
    {
        name: 'Station de Lyon (pas une Gare)',
        position: [45.83306360826978, 4.735886398173691],
        data: {
            'Gazole': 1.344,
            'SP96': 1.822,
            'E10': 1.146,
            'SP98': 1.921
        }
    }
]
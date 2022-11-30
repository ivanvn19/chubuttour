var APP_DATA = {
  "scenes": [
    {
      "id": "0-ingreso--a-la-uf",
      "name": "Ingreso  a la UF",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.295352810808854,
        "pitch": 0.08118018432286611,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -1.4893870152612898,
          "pitch": 0.08180456472352304,
          "rotation": 0,
          "target": "1-estar"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-estar",
      "name": "Estar",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.6036927208228953,
        "pitch": 0.1377997860258393,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": 1.0010281328530048,
          "pitch": 0.13263336623239042,
          "rotation": 0.7853981633974483,
          "target": "0-ingreso--a-la-uf"
        },
        {
          "yaw": 0.21130683754162405,
          "pitch": 0.1283702245549332,
          "rotation": 0,
          "target": "2-estar-ii"
        },
        {
          "yaw": -0.22404849072092858,
          "pitch": -0.037911655504551334,
          "rotation": 0.7853981633974483,
          "target": "4-escaleras"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-estar-ii",
      "name": "Estar II",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.934907422624068,
        "pitch": 0.24254171721579354,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -2.3011546265698435,
          "pitch": 0.11764858106677423,
          "rotation": 0,
          "target": "3-cocina"
        },
        {
          "yaw": -1.6998118746789377,
          "pitch": 0.1255210930548749,
          "rotation": 0,
          "target": "0-ingreso--a-la-uf"
        },
        {
          "yaw": 2.012017687924075,
          "pitch": -0.059777734812151095,
          "rotation": 0.7853981633974483,
          "target": "4-escaleras"
        },
        {
          "yaw": -2.7492927973512113,
          "pitch": 0.13140708698854375,
          "rotation": 0,
          "target": "5-toilette"
        },
        {
          "yaw": -0.6228677345895122,
          "pitch": 0.06141526341069614,
          "rotation": 0,
          "target": "1-estar"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-cocina",
      "name": "Cocina",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.0258609876506526,
        "pitch": 0.15678548335801246,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": 0.059988705418975385,
          "pitch": 0.15424378608334344,
          "rotation": 0,
          "target": "2-estar-ii"
        },
        {
          "yaw": 0.6262947152175293,
          "pitch": 0.18191725103096168,
          "rotation": 1.5707963267948966,
          "target": "5-toilette"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-escaleras",
      "name": "Escaleras",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.4907484753584352,
        "pitch": 0.10445052484313067,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -1.0132090733454255,
          "pitch": 0.6536938838044541,
          "rotation": 3.141592653589793,
          "target": "2-estar-ii"
        },
        {
          "yaw": -2.466576841546768,
          "pitch": -0.390761420269623,
          "rotation": 0.7853981633974483,
          "target": "6-acceso-a-pa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-toilette",
      "name": "Toilette",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.561009565115553,
        "pitch": 0.6229906587652572,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -0.4509015342882634,
          "pitch": 0.09751376506117992,
          "rotation": 0,
          "target": "2-estar-ii"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-acceso-a-pa",
      "name": "Acceso a PA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.885136110439598,
        "pitch": 0.18072025662994307,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -0.5081257246192834,
          "pitch": 0.1741394549768902,
          "rotation": 3.9269908169872414,
          "target": "4-escaleras"
        },
        {
          "yaw": 0.8166426710041872,
          "pitch": 0.18157367659900459,
          "rotation": 0,
          "target": "10-cuarto-ii"
        },
        {
          "yaw": 2.1616100471598427,
          "pitch": 0.19996615920459604,
          "rotation": 0,
          "target": "7-balcn-pa"
        },
        {
          "yaw": 3.088218713223612,
          "pitch": 0.14739329646377364,
          "rotation": 0,
          "target": "9-cuarto-i"
        },
        {
          "yaw": -2.3030750413912244,
          "pitch": 0.036189023654424446,
          "rotation": 0,
          "target": "8-bao-pa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-balcn-pa",
      "name": "Balcón PA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.964196583350006,
        "pitch": 0.20882214230059049,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": 1.2297141053604346,
          "pitch": 0.17313980947158747,
          "rotation": 0,
          "target": "6-acceso-a-pa"
        },
        {
          "yaw": -0.2653254002724097,
          "pitch": 0.2639289612792446,
          "rotation": 0,
          "target": "9-cuarto-i"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-bao-pa",
      "name": "Baño PA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.5709088228227621,
        "pitch": 0.4472381266748222,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -0.6722150293498341,
          "pitch": 0.30509708661213253,
          "rotation": 0,
          "target": "6-acceso-a-pa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-cuarto-i",
      "name": "Cuarto I",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.8084719614820663,
        "pitch": 0.14919131173118494,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": 0.9802805605012992,
          "pitch": 0.19191531677518014,
          "rotation": 0,
          "target": "7-balcn-pa"
        },
        {
          "yaw": -0.23319872479132542,
          "pitch": 0.15314387936907892,
          "rotation": 0,
          "target": "6-acceso-a-pa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-cuarto-ii",
      "name": "Cuarto II",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 3.053517516082742,
        "pitch": 0.1978555527705943,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -0.9442953974597383,
          "pitch": 0.12621718509335622,
          "rotation": 0,
          "target": "6-acceso-a-pa"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Dúplex Chubut ",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};

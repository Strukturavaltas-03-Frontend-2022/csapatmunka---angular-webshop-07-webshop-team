import { Injectable } from '@angular/core';
import { Category } from '../model/category';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  list: Product[] = [
    {
      id: 1,
      catId: 2,
      name: 'Odds, The',
      description:
        'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
      image: 'http://dummyimage.com/195x100.png/dddddd/000000',
      price: 2969,
      stock: 8,
      featured: 'Optimized',
      active: true,
    },
    {
      id: 2,
      catId: 1,
      name: 'Bring It On',
      description:
        'In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.',
      image: 'http://dummyimage.com/210x100.png/5fa2dd/ffffff',
      price: 2549,
      stock: 4,
      featured: 'task-force',
      active: false,
    },
    {
      id: 3,
      catId: 1,
      name: 'Awakening, The',
      description:
        'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
      image: 'http://dummyimage.com/250x100.png/dddddd/000000',
      price: 2626,
      stock: 7,
      featured: 'interface',
      active: true,
    },
    {
      id: 4,
      catId: 9,
      name: "Mackenna's Gold",
      description:
        'Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.',
      image: 'http://dummyimage.com/146x100.png/5fa2dd/ffffff',
      price: 2528,
      stock: 7,
      featured: 'exuding',
      active: true,
    },
    {
      id: 5,
      catId: 3,
      name: 'Harvest',
      description:
        'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.',
      image: 'http://dummyimage.com/220x100.png/ff4444/ffffff',
      price: 3491,
      stock: 10,
      featured: 'Front-line',
      active: true,
    },
    {
      id: 6,
      catId: 1,
      name: 'Crime Spree',
      description:
        'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.',
      image: 'http://dummyimage.com/128x100.png/cc0000/ffffff',
      price: 3324,
      stock: 9,
      featured: 'De-engineered',
      active: false,
    },
    {
      id: 7,
      catId: 2,
      name: 'Across 110th Street',
      description:
        'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
      image: 'http://dummyimage.com/137x100.png/5fa2dd/ffffff',
      price: 3401,
      stock: 8,
      featured: 'methodology',
      active: true,
    },
    {
      id: 8,
      catId: 5,
      name: 'Beauty and the Bastard (Tyttö sinä olet tähti)',
      description:
        'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
      image: 'http://dummyimage.com/239x100.png/cc0000/ffffff',
      price: 2951,
      stock: 4,
      featured: 'challenge',
      active: true,
    },
    {
      id: 9,
      catId: 4,
      name: 'Henry Kissinger: Secrets of a Superpower (Henry Kissinger - Geheimnisse einer Supermacht)',
      description:
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.',
      image: 'http://dummyimage.com/187x100.png/5fa2dd/ffffff',
      price: 2768,
      stock: 8,
      featured: 'didactic',
      active: true,
    },
    {
      id: 10,
      catId: 3,
      name: 'Leonard Part 6',
      description:
        'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.',
      image: 'http://dummyimage.com/103x100.png/ff4444/ffffff',
      price: 2644,
      stock: 8,
      featured: 'Realigned',
      active: false,
    },
    {
      id: 11,
      catId: 3,
      name: 'Man with the Screaming Brain',
      description:
        'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
      image: 'http://dummyimage.com/181x100.png/5fa2dd/ffffff',
      price: 3417,
      stock: 10,
      featured: 'software',
      active: false,
    },
    {
      id: 12,
      catId: 8,
      name: "March of the Penguins (Marche de l'empereur, La)",
      description:
        'Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.',
      image: 'http://dummyimage.com/188x100.png/5fa2dd/ffffff',
      price: 3199,
      stock: 5,
      featured: 'explicit',
      active: true,
    },
    {
      id: 13,
      catId: 5,
      name: 'Copying Beethoven',
      description:
        'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
      image: 'http://dummyimage.com/130x100.png/5fa2dd/ffffff',
      price: 3255,
      stock: 10,
      featured: 'Exclusive',
      active: false,
    },
    {
      id: 14,
      catId: 2,
      name: 'The Two Policemen',
      description:
        'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
      image: 'http://dummyimage.com/205x100.png/dddddd/000000',
      price: 2666,
      stock: 4,
      featured: 'migration',
      active: false,
    },
    {
      id: 15,
      catId: 1,
      name: 'Rebirth of Mothra III',
      description:
        'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
      image: 'http://dummyimage.com/206x100.png/5fa2dd/ffffff',
      price: 3160,
      stock: 3,
      featured: 'productivity',
      active: true,
    },
    {
      id: 16,
      catId: 7,
      name: 'Spin (You Are Here)',
      description:
        'Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.',
      image: 'http://dummyimage.com/110x100.png/dddddd/000000',
      price: 2942,
      stock: 7,
      featured: 'Integrated',
      active: false,
    },
    {
      id: 17,
      catId: 10,
      name: 'Operation Pacific',
      description:
        'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
      image: 'http://dummyimage.com/205x100.png/dddddd/000000',
      price: 3384,
      stock: 6,
      featured: 'software',
      active: true,
    },
    {
      id: 18,
      catId: 8,
      name: 'Mr. Woodcock',
      description:
        'Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.',
      image: 'http://dummyimage.com/142x100.png/dddddd/000000',
      price: 3034,
      stock: 3,
      featured: 'attitude',
      active: true,
    },
    {
      id: 19,
      catId: 2,
      name: 'Kings & Queen (Rois et reine)',
      description:
        'Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
      image: 'http://dummyimage.com/163x100.png/5fa2dd/ffffff',
      price: 3231,
      stock: 1,
      featured: 'Ameliorated',
      active: true,
    },
    {
      id: 20,
      catId: 4,
      name: 'High and Dry',
      description:
        'Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.',
      image: 'http://dummyimage.com/136x100.png/cc0000/ffffff',
      price: 3017,
      stock: 3,
      featured: 'leading edge',
      active: false,
    },
    {
      id: 21,
      catId: 1,
      name: 'Terrorizers, The (Kong bu fen zi)',
      description:
        'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
      image: 'http://dummyimage.com/148x100.png/ff4444/ffffff',
      price: 3219,
      stock: 10,
      featured: 'function',
      active: false,
    },
    {
      id: 22,
      catId: 3,
      name: 'Homegrown',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.',
      image: 'http://dummyimage.com/226x100.png/5fa2dd/ffffff',
      price: 3250,
      stock: 2,
      featured: 'moderator',
      active: true,
    },
    {
      id: 23,
      catId: 8,
      name: 'Away from Her',
      description:
        'Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      image: 'http://dummyimage.com/159x100.png/ff4444/ffffff',
      price: 2672,
      stock: 6,
      featured: 'discrete',
      active: true,
    },
    {
      id: 24,
      catId: 5,
      name: 'Transcendent Man',
      description:
        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.',
      image: 'http://dummyimage.com/221x100.png/ff4444/ffffff',
      price: 2913,
      stock: 9,
      featured: 'function',
      active: true,
    },
    {
      id: 25,
      catId: 9,
      name: 'In a Dark Place',
      description:
        'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
      image: 'http://dummyimage.com/250x100.png/ff4444/ffffff',
      price: 2592,
      stock: 2,
      featured: 'open system',
      active: false,
    },
    {
      id: 26,
      catId: 7,
      name: 'R.I.P.D.',
      description:
        'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
      image: 'http://dummyimage.com/201x100.png/5fa2dd/ffffff',
      price: 3272,
      stock: 10,
      featured: 'responsive',
      active: false,
    },
    {
      id: 27,
      catId: 9,
      name: 'Second Skin (Segunda Piel)',
      description:
        'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
      image: 'http://dummyimage.com/190x100.png/5fa2dd/ffffff',
      price: 3077,
      stock: 2,
      featured: 'zero defect',
      active: false,
    },
    {
      id: 28,
      catId: 2,
      name: 'Death at a Funeral',
      description:
        'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.',
      image: 'http://dummyimage.com/125x100.png/5fa2dd/ffffff',
      price: 3180,
      stock: 6,
      featured: 'firmware',
      active: true,
    },
    {
      id: 29,
      catId: 1,
      name: 'Rabbit',
      description:
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      image: 'http://dummyimage.com/221x100.png/5fa2dd/ffffff',
      price: 3108,
      stock: 2,
      featured: 'implementation',
      active: true,
    },
    {
      id: 30,
      catId: 6,
      name: 'Mission, The (Cheung fo)',
      description:
        'In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.',
      image: 'http://dummyimage.com/175x100.png/cc0000/ffffff',
      price: 3418,
      stock: 9,
      featured: 'multi-state',
      active: false,
    },
    {
      id: 31,
      catId: 9,
      name: 'Hollywood Revue of 1929, The',
      description:
        'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.',
      image: 'http://dummyimage.com/220x100.png/cc0000/ffffff',
      price: 3450,
      stock: 3,
      featured: 'intangible',
      active: true,
    },
    {
      id: 32,
      catId: 6,
      name: 'Au revoir les enfants',
      description:
        'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
      image: 'http://dummyimage.com/123x100.png/dddddd/000000',
      price: 3385,
      stock: 10,
      featured: 'Programmable',
      active: false,
    },
    {
      id: 33,
      catId: 3,
      name: 'Vincent Wants to Sea (Vincent will meer)',
      description:
        'Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.',
      image: 'http://dummyimage.com/170x100.png/ff4444/ffffff',
      price: 2514,
      stock: 9,
      featured: 'Inverse',
      active: true,
    },
    {
      id: 34,
      catId: 9,
      name: 'Scary Movie 3',
      description:
        'Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.',
      image: 'http://dummyimage.com/219x100.png/dddddd/000000',
      price: 3378,
      stock: 7,
      featured: 'solution-oriented',
      active: true,
    },
    {
      id: 35,
      catId: 10,
      name: 'Challenge, The',
      description:
        'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
      image: 'http://dummyimage.com/119x100.png/5fa2dd/ffffff',
      price: 2999,
      stock: 7,
      featured: 'content-based',
      active: false,
    },
    {
      id: 36,
      catId: 8,
      name: 'Kin-Dza-Dza!',
      description:
        'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
      image: 'http://dummyimage.com/164x100.png/5fa2dd/ffffff',
      price: 2883,
      stock: 9,
      featured: 'local',
      active: false,
    },
    {
      id: 37,
      catId: 8,
      name: 'Happiness',
      description:
        'Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.',
      image: 'http://dummyimage.com/172x100.png/5fa2dd/ffffff',
      price: 3022,
      stock: 6,
      featured: 'logistical',
      active: false,
    },
    {
      id: 38,
      catId: 5,
      name: 'The Sea That Thinks',
      description:
        'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
      image: 'http://dummyimage.com/110x100.png/ff4444/ffffff',
      price: 2975,
      stock: 9,
      featured: 'pricing structure',
      active: false,
    },
    {
      id: 39,
      catId: 4,
      name: 'From Morn to Midnight (Von morgens bis Mitternacht)',
      description:
        'Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.',
      image: 'http://dummyimage.com/147x100.png/5fa2dd/ffffff',
      price: 2599,
      stock: 4,
      featured: 'tertiary',
      active: false,
    },
    {
      id: 40,
      catId: 1,
      name: 'Invisible Woman, The',
      description: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
      image: 'http://dummyimage.com/207x100.png/cc0000/ffffff',
      price: 2804,
      stock: 1,
      featured: 'matrices',
      active: false,
    },
    {
      id: 41,
      catId: 6,
      name: 'Anatomy of a Murder',
      description:
        'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
      image: 'http://dummyimage.com/242x100.png/dddddd/000000',
      price: 2575,
      stock: 5,
      featured: 'zero defect',
      active: false,
    },
    {
      id: 42,
      catId: 2,
      name: '1990: The Bronx Warriors (1990: I guerrieri del Bronx)',
      description:
        'Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.',
      image: 'http://dummyimage.com/249x100.png/dddddd/000000',
      price: 2808,
      stock: 9,
      featured: 'holistic',
      active: false,
    },
    {
      id: 43,
      catId: 2,
      name: 'Joyeux Noël (Merry Christmas)',
      description:
        'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
      image: 'http://dummyimage.com/227x100.png/5fa2dd/ffffff',
      price: 2962,
      stock: 8,
      featured: 'core',
      active: false,
    },
    {
      id: 44,
      catId: 1,
      name: 'Dead Zone, The',
      description:
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      image: 'http://dummyimage.com/196x100.png/5fa2dd/ffffff',
      price: 2531,
      stock: 4,
      featured: 'maximized',
      active: true,
    },
    {
      id: 45,
      catId: 7,
      name: 'Town Without Pity',
      description:
        'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
      image: 'http://dummyimage.com/154x100.png/dddddd/000000',
      price: 3407,
      stock: 1,
      featured: 'tertiary',
      active: true,
    },
    {
      id: 46,
      catId: 10,
      name: 'Planes',
      description:
        'Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.',
      image: 'http://dummyimage.com/208x100.png/5fa2dd/ffffff',
      price: 3246,
      stock: 10,
      featured: 'capacity',
      active: true,
    },
    {
      id: 47,
      catId: 6,
      name: 'Wisdom of Crocodiles, The (a.k.a. Immortality)',
      description:
        'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
      image: 'http://dummyimage.com/168x100.png/5fa2dd/ffffff',
      price: 2911,
      stock: 5,
      featured: 'Fully-configurable',
      active: false,
    },
    {
      id: 48,
      catId: 1,
      name: 'April in Paris',
      description:
        'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
      image: 'http://dummyimage.com/179x100.png/dddddd/000000',
      price: 3040,
      stock: 9,
      featured: 'contingency',
      active: true,
    },
    {
      id: 49,
      catId: 10,
      name: 'Intended, The',
      description:
        'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
      image: 'http://dummyimage.com/210x100.png/cc0000/ffffff',
      price: 3038,
      stock: 7,
      featured: 'De-engineered',
      active: true,
    },
    {
      id: 50,
      catId: 2,
      name: 'The Outsider',
      description:
        'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
      image: 'http://dummyimage.com/160x100.png/5fa2dd/ffffff',
      price: 3133,
      stock: 3,
      featured: 'internet solution',
      active: false,
    },
    {
      id: 51,
      catId: 3,
      name: 'Scared Shrekless',
      description:
        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.',
      image: 'http://dummyimage.com/138x100.png/ff4444/ffffff',
      price: 3003,
      stock: 3,
      featured: 'productivity',
      active: false,
    },
    {
      id: 52,
      catId: 9,
      name: '7 Below (Seven Below)',
      description:
        'Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
      image: 'http://dummyimage.com/124x100.png/cc0000/ffffff',
      price: 3232,
      stock: 7,
      featured: 'eco-centric',
      active: true,
    },
    {
      id: 53,
      catId: 5,
      name: 'Playing for Time',
      description:
        'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.',
      image: 'http://dummyimage.com/114x100.png/5fa2dd/ffffff',
      price: 3493,
      stock: 5,
      featured: 'global',
      active: false,
    },
    {
      id: 54,
      catId: 1,
      name: 'Average Little Man, An (Un borghese piccolo piccolo)',
      description:
        'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
      image: 'http://dummyimage.com/135x100.png/dddddd/000000',
      price: 3446,
      stock: 10,
      featured: 'context-sensitive',
      active: false,
    },
    {
      id: 55,
      catId: 3,
      name: 'Northwest Passage',
      description:
        'Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
      image: 'http://dummyimage.com/193x100.png/5fa2dd/ffffff',
      price: 3002,
      stock: 3,
      featured: 'Assimilated',
      active: false,
    },
    {
      id: 56,
      catId: 9,
      name: 'Beach Girls and the Monster, The',
      description:
        'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.',
      image: 'http://dummyimage.com/191x100.png/5fa2dd/ffffff',
      price: 2950,
      stock: 1,
      featured: 'cohesive',
      active: false,
    },
    {
      id: 57,
      catId: 5,
      name: 'HealtH',
      description:
        'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
      image: 'http://dummyimage.com/227x100.png/5fa2dd/ffffff',
      price: 2745,
      stock: 1,
      featured: 'Grass-roots',
      active: false,
    },
    {
      id: 58,
      catId: 4,
      name: 'Business of Fancydancing, The',
      description:
        'Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
      image: 'http://dummyimage.com/113x100.png/ff4444/ffffff',
      price: 3423,
      stock: 4,
      featured: 'conglomeration',
      active: true,
    },
    {
      id: 59,
      catId: 7,
      name: 'Single Girl, A (Fille seule, La)',
      description:
        'Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.',
      image: 'http://dummyimage.com/214x100.png/ff4444/ffffff',
      price: 3132,
      stock: 2,
      featured: 'actuating',
      active: false,
    },
    {
      id: 60,
      catId: 9,
      name: 'Convoy',
      description: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.',
      image: 'http://dummyimage.com/160x100.png/dddddd/000000',
      price: 2677,
      stock: 2,
      featured: 'access',
      active: false,
    },
    {
      id: 61,
      catId: 7,
      name: 'Guide for the Married Man, A',
      description:
        'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.',
      image: 'http://dummyimage.com/200x100.png/ff4444/ffffff',
      price: 2978,
      stock: 7,
      featured: 'challenge',
      active: true,
    },
    {
      id: 62,
      catId: 2,
      name: 'Science and Islam',
      description:
        'Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.',
      image: 'http://dummyimage.com/181x100.png/5fa2dd/ffffff',
      price: 3321,
      stock: 10,
      featured: 'Upgradable',
      active: false,
    },
    {
      id: 63,
      catId: 5,
      name: 'Pretty Poison',
      description:
        'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
      image: 'http://dummyimage.com/233x100.png/5fa2dd/ffffff',
      price: 3462,
      stock: 9,
      featured: 'pricing structure',
      active: true,
    },
    {
      id: 64,
      catId: 1,
      name: 'Kaboom',
      description:
        'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
      image: 'http://dummyimage.com/204x100.png/cc0000/ffffff',
      price: 3069,
      stock: 6,
      featured: 'hardware',
      active: true,
    },
    {
      id: 65,
      catId: 5,
      name: 'Mission Congo',
      description:
        'Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.',
      image: 'http://dummyimage.com/145x100.png/cc0000/ffffff',
      price: 2981,
      stock: 5,
      featured: 'national',
      active: false,
    },
    {
      id: 66,
      catId: 3,
      name: 'Alucarda',
      description:
        'Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.',
      image: 'http://dummyimage.com/225x100.png/dddddd/000000',
      price: 3285,
      stock: 2,
      featured: 'artificial intelligence',
      active: true,
    },
    {
      id: 67,
      catId: 6,
      name: 'Resistance',
      description:
        'In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.',
      image: 'http://dummyimage.com/230x100.png/cc0000/ffffff',
      price: 3489,
      stock: 1,
      featured: 'fault-tolerant',
      active: false,
    },
    {
      id: 68,
      catId: 7,
      name: 'Marquise of O, The (Marquise von O..., Die)',
      description:
        'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
      image: 'http://dummyimage.com/188x100.png/5fa2dd/ffffff',
      price: 2665,
      stock: 7,
      featured: 'well-modulated',
      active: false,
    },
    {
      id: 69,
      catId: 1,
      name: 'Exterminator, The',
      description:
        'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.',
      image: 'http://dummyimage.com/190x100.png/dddddd/000000',
      price: 2796,
      stock: 9,
      featured: 'Managed',
      active: true,
    },
    {
      id: 70,
      catId: 1,
      name: 'Heartbreak Hospital',
      description:
        'In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.',
      image: 'http://dummyimage.com/140x100.png/dddddd/000000',
      price: 3156,
      stock: 3,
      featured: 'task-force',
      active: true,
    },
    {
      id: 71,
      catId: 10,
      name: 'Wheelmen',
      description:
        'In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.',
      image: 'http://dummyimage.com/109x100.png/dddddd/000000',
      price: 2957,
      stock: 1,
      featured: 'paradigm',
      active: false,
    },
    {
      id: 72,
      catId: 4,
      name: 'Love with the Proper Stranger',
      description:
        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.',
      image: 'http://dummyimage.com/169x100.png/dddddd/000000',
      price: 2748,
      stock: 3,
      featured: 'Persistent',
      active: false,
    },
    {
      id: 73,
      catId: 9,
      name: 'Jimmy Rosenberg: The Father, the Son & the Talent',
      description:
        'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
      image: 'http://dummyimage.com/164x100.png/dddddd/000000',
      price: 2598,
      stock: 10,
      featured: 'capacity',
      active: false,
    },
    {
      id: 74,
      catId: 1,
      name: 'Making the Earth Stand Still',
      description:
        'Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
      image: 'http://dummyimage.com/139x100.png/cc0000/ffffff',
      price: 2980,
      stock: 1,
      featured: 'Integrated',
      active: false,
    },
    {
      id: 75,
      catId: 7,
      name: 'Nasty Old People',
      description:
        'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
      image: 'http://dummyimage.com/123x100.png/cc0000/ffffff',
      price: 3401,
      stock: 1,
      featured: 'archive',
      active: true,
    },
    {
      id: 76,
      catId: 2,
      name: 'Convoy',
      description:
        'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.',
      image: 'http://dummyimage.com/189x100.png/cc0000/ffffff',
      price: 2824,
      stock: 4,
      featured: 'framework',
      active: false,
    },
    {
      id: 77,
      catId: 8,
      name: 'Straw Dogs',
      description:
        'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
      image: 'http://dummyimage.com/150x100.png/5fa2dd/ffffff',
      price: 3372,
      stock: 6,
      featured: 'mission-critical',
      active: false,
    },
    {
      id: 78,
      catId: 1,
      name: 'Private School',
      description:
        'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
      image: 'http://dummyimage.com/138x100.png/ff4444/ffffff',
      price: 2672,
      stock: 10,
      featured: 'real-time',
      active: false,
    },
    {
      id: 79,
      catId: 3,
      name: 'Gamera the Brave',
      description:
        'Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.',
      image: 'http://dummyimage.com/224x100.png/dddddd/000000',
      price: 3145,
      stock: 8,
      featured: 'responsive',
      active: false,
    },
    {
      id: 80,
      catId: 6,
      name: 'Dead Birds',
      description:
        'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
      image: 'http://dummyimage.com/121x100.png/cc0000/ffffff',
      price: 3208,
      stock: 1,
      featured: 'value-added',
      active: false,
    },
    {
      id: 81,
      catId: 9,
      name: '10th Victim, The (La decima vittima)',
      description:
        'Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
      image: 'http://dummyimage.com/154x100.png/5fa2dd/ffffff',
      price: 2534,
      stock: 5,
      featured: 'knowledge base',
      active: true,
    },
    {
      id: 82,
      catId: 10,
      name: 'Making the Boys ',
      description:
        'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.',
      image: 'http://dummyimage.com/203x100.png/5fa2dd/ffffff',
      price: 2682,
      stock: 9,
      featured: 'user-facing',
      active: true,
    },
    {
      id: 83,
      catId: 7,
      name: 'Val Lewton:  The Man in the Shadows',
      description:
        'Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.',
      image: 'http://dummyimage.com/150x100.png/cc0000/ffffff',
      price: 2691,
      stock: 8,
      featured: 'knowledge base',
      active: true,
    },
    {
      id: 84,
      catId: 5,
      name: 'Reincarnated',
      description:
        'Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.',
      image: 'http://dummyimage.com/190x100.png/cc0000/ffffff',
      price: 3180,
      stock: 8,
      featured: 'grid-enabled',
      active: false,
    },
    {
      id: 85,
      catId: 5,
      name: 'Redline',
      description:
        'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
      image: 'http://dummyimage.com/122x100.png/ff4444/ffffff',
      price: 2527,
      stock: 4,
      featured: 'encoding',
      active: true,
    },
    {
      id: 86,
      catId: 9,
      name: 'Attila (Attila the Hun)',
      description:
        'Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.',
      image: 'http://dummyimage.com/232x100.png/5fa2dd/ffffff',
      price: 3130,
      stock: 3,
      featured: 'Secured',
      active: true,
    },
    {
      id: 87,
      catId: 2,
      name: 'Cornered',
      description:
        'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.',
      image: 'http://dummyimage.com/147x100.png/5fa2dd/ffffff',
      price: 3485,
      stock: 2,
      featured: '24 hour',
      active: true,
    },
    {
      id: 88,
      catId: 10,
      name: 'Purge: Anarchy, The',
      description:
        'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
      image: 'http://dummyimage.com/209x100.png/cc0000/ffffff',
      price: 2723,
      stock: 6,
      featured: 'Re-engineered',
      active: true,
    },
    {
      id: 89,
      catId: 1,
      name: 'Secret Ceremony',
      description:
        'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
      image: 'http://dummyimage.com/235x100.png/cc0000/ffffff',
      price: 2914,
      stock: 8,
      featured: 'discrete',
      active: true,
    },
    {
      id: 90,
      catId: 8,
      name: 'Chance',
      description:
        'Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.',
      image: 'http://dummyimage.com/246x100.png/dddddd/000000',
      price: 2735,
      stock: 9,
      featured: 'Digitized',
      active: true,
    },
    {
      id: 91,
      catId: 6,
      name: "Breakfast at Tiffany's",
      description:
        'Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.',
      image: 'http://dummyimage.com/187x100.png/dddddd/000000',
      price: 3169,
      stock: 10,
      featured: 'zero administration',
      active: false,
    },
    {
      id: 92,
      catId: 3,
      name: 'Great Flamarion, The',
      description:
        'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
      image: 'http://dummyimage.com/235x100.png/5fa2dd/ffffff',
      price: 2530,
      stock: 10,
      featured: 'systematic',
      active: false,
    },
    {
      id: 93,
      catId: 4,
      name: 'Inventing the Abbotts',
      description:
        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.',
      image: 'http://dummyimage.com/115x100.png/ff4444/ffffff',
      price: 3495,
      stock: 7,
      featured: 'Phased',
      active: true,
    },
    {
      id: 94,
      catId: 5,
      name: 'Hulk',
      description:
        'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.',
      image: 'http://dummyimage.com/243x100.png/cc0000/ffffff',
      price: 3144,
      stock: 8,
      featured: 'web-enabled',
      active: false,
    },
    {
      id: 95,
      catId: 5,
      name: 'Blindsight',
      description:
        'Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
      image: 'http://dummyimage.com/124x100.png/ff4444/ffffff',
      price: 3259,
      stock: 10,
      featured: 'empowering',
      active: false,
    },
    {
      id: 96,
      catId: 8,
      name: "Midsummer Night's Party, A (Midsummer of Love, A) (Sommaren med Göran)",
      description:
        'Nunc purus. Phasellus in felis. Donec semper sapien a libero.',
      image: 'http://dummyimage.com/190x100.png/5fa2dd/ffffff',
      price: 2974,
      stock: 9,
      featured: 'maximized',
      active: false,
    },
    {
      id: 97,
      catId: 1,
      name: 'Mike Bassett: England Manager',
      description:
        'Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.',
      image: 'http://dummyimage.com/106x100.png/cc0000/ffffff',
      price: 2986,
      stock: 3,
      featured: 'cohesive',
      active: false,
    },
    {
      id: 98,
      catId: 7,
      name: 'Detroit',
      description:
        'Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.',
      image: 'http://dummyimage.com/157x100.png/5fa2dd/ffffff',
      price: 3389,
      stock: 10,
      featured: 'Stand-alone',
      active: true,
    },
    {
      id: 99,
      catId: 7,
      name: 'Card Subject To Change',
      description:
        'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
      image: 'http://dummyimage.com/179x100.png/ff4444/ffffff',
      price: 2841,
      stock: 9,
      featured: 'client-driven',
      active: false,
    },
    {
      id: 100,
      catId: 8,
      name: 'Electile Dysfunction',
      description:
        'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.',
      image: 'http://dummyimage.com/207x100.png/cc0000/ffffff',
      price: 3333,
      stock: 10,
      featured: 'synergy',
      active: true,
    },
  ];

  categoryList: Category[] = [
    {
      id: 1,
      name: 'Drama',
      description: 'Ut at dolor quis odio consequat varius.',
    },
    {
      id: 2,
      name: 'Comedy|Fantasy',
      description:
        'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    },
    { id: 3, name: 'Comedy', description: 'Integer tincidunt ante vel ipsum.' },
    {
      id: 4,
      name: 'Action|Crime|Drama',
      description: 'In hac habitasse platea dictumst.',
    },
    { id: 5, name: 'Horror', description: 'Nunc purus.' },
    { id: 6, name: 'Drama', description: 'Curabitur gravida nisi at nibh.' },
    { id: 7, name: 'Drama', description: 'Nullam porttitor lacus at turpis.' },
    {
      id: 8,
      name: 'Comedy|Drama',
      description:
        'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    },
    { id: 9, name: 'Horror', description: 'Duis bibendum.' },
    {
      id: 10,
      name: 'Action|Crime|Drama|Thriller',
      description: 'Maecenas tincidunt lacus at velit.',
    },
  ];

  constructor() {}
}
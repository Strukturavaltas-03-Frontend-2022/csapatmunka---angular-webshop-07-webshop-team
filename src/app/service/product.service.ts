import { HttpClient } from '@angular/common/http';
import { isNgTemplate } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../model/category';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl: string = 'http://localhost:3000/movies';

  getAll(page: string = ''): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}${page}`);
  }

  get(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }

  update(product: Product): Observable<Product> {
    return this.http.patch<Product>(`${this.apiUrl}/${product.id}`, product);
  }

  remove(product: Product): Observable<Product> {
    return this.http.delete<Product>(`${this.apiUrl}/${product.id}`);
  }

  getHomeProducts(): Product[] {
    return this.list.filter((item: Product) => item.featured == true).sort(() => Math.random() - 0.5).slice(0, 5);
  }

  getDocumentaryHighlightedProducts(): Product[] {
    return this.list.filter((item: Product) => item.featured == true && item.catId == 1).sort(() => Math.random() - 0.5).slice(0, 5);
  }

  getComedyHighlightedProducts(): Product[] {
    return this.list.filter((item: Product) => item.featured == true && item.catId == 2).sort(() => Math.random() - 0.5).slice(0, 5);
  }

  getAdventureHighlightedProducts(): Product[] {
    return this.list.filter((item: Product) => item.featured == true && item.catId == 3).sort(() => Math.random() - 0.5).slice(0, 5);
  }

  getHomeDiscountsProducts(): Product[] {
    return this.list.sort(() => Math.random() - 0.5).slice(0, 5);
  }

  getDocumentaryProducts(): Product[]{
    return this.list.filter((item: Product) => item.catId == 1).sort(() => Math.random() - 0.5);
  }

  getComedyProducts(): Product[]{
    return this.list.filter((item: Product) => item.catId == 2).sort(() => Math.random() - 0.5);
  }

  getAdventureProducts(): Product[]{
    return this.list.filter((item: Product) => item.catId == 3).sort(() => Math.random() - 0.5);
  }

  list: Product[] = [
    {
      id: 1,
      catId: 3,
      name: 'Rich and Famous (Gong woo ching)',
      description:
        'Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.',
      image: '../../../assets/img/1911.png',
      price: 2585,
      stock: 5,
      featured: true,
      active: true,
    },
    {
      id: 2,
      catId: 2,
      name: 'The Epic of Everest',
      description:
        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae, Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.',
      image: '../../../assets/img/1912.png',
      price: 2974,
      stock: 9,
      featured: false,
      active: true,
    },
    {
      id: 3,
      catId: 2,
      name: 'Baraka',
      description:
        'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.',
      image: '../../../assets/img/1913.png',
      price: 2690,
      stock: 9,
      featured: true,
      active: true,
    },
    {
      id: 4,
      catId: 3,
      name: 'MirrorMask',
      description:
        'Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.',
      image: '../../../assets/img/1914.png',
      price: 3007,
      stock: 3,
      featured: false,
      active: false,
    },
    {
      id: 5,
      catId: 3,
      name: 'Flower of Evil, The (Fleur du mal, La)',
      description:
        'Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.',
      image: '../../../assets/img/1915.png',
      price: 2623,
      stock: 8,
      featured: false,
      active: true,
    },
    {
      id: 6,
      catId: 3,
      name: 'Wanted! (Nachbarinnen)',
      description:
        'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.',
      image: '../../../assets/img/1916.png',
      price: 2846,
      stock: 2,
      featured: false,
      active: false,
    },
    {
      id: 7,
      catId: 1,
      name: 'RFK Must Die: The Assassination of Bobby Kennedy',
      description:
        'Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.',
      image: '../../../assets/img/1917.png',
      price: 3063,
      stock: 8,
      featured: false,
      active: false,
    },
    {
      id: 8,
      catId: 2,
      name: 'From Here to Eternity',
      description:
        'Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.',
      image: '../../../assets/img/1918.png',
      price: 2916,
      stock: 4,
      featured: false,
      active: false,
    },
    {
      id: 9,
      catId: 3,
      name: 'Trust',
      description:
        'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
      image: '../../../assets/img/1919.png',
      price: 2783,
      stock: 10,
      featured: true,
      active: true,
    },
    {
      id: 10,
      catId: 3,
      name: 'Looker',
      description:
        'Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.',
      image: '../../../assets/img/1920.png',
      price: 3122,
      stock: 6,
      featured: true,
      active: true,
    },
    {
      id: 11,
      catId: 2,
      name: 'Loosies',
      description:
        'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
      image: '../../../assets/img/1921.png',
      price: 2533,
      stock: 4,
      featured: true,
      active: true,
    },
    {
      id: 12,
      catId: 3,
      name: 'Quarantine',
      description:
        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae, Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.',
      image: '../../../assets/img/1922.png',
      price: 3195,
      stock: 10,
      featured: true,
      active: true,
    },
    {
      id: 13,
      catId: 3,
      name: 'Nude Nuns with Big Guns',
      description:
        'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
      image: '../../../assets/img/1923.png',
      price: 2950,
      stock: 1,
      featured: false,
      active: true,
    },
    {
      id: 14,
      catId: 1,
      name: 'Paddington',
      description:
        'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
      image: '../../../assets/img/1924.png',
      price: 3416,
      stock: 5,
      featured: true,
      active: false,
    },
    {
      id: 15,
      catId: 2,
      name: 'Lady from Shanghai, The',
      description:
        'Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.',
      image: '../../../assets/img/1925.png',
      price: 2766,
      stock: 3,
      featured: false,
      active: true,
    },
    {
      id: 16,
      catId: 2,
      name: 'Letter, The (La lettre)',
      description: 'Aliquam erat volutpat. In congue. Etiam justo.',
      image: '../../../assets/img/1926.png',
      price: 3014,
      stock: 7,
      featured: true,
      active: false,
    },
    {
      id: 17,
      catId: 3,
      name: 'Belle Starr',
      description:
        'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae, Nulla dapibus dolor vel est.',
      image: '../../../assets/img/1927.png',
      price: 2544,
      stock: 3,
      featured: false,
      active: false,
    },
    {
      id: 18,
      catId: 1,
      name: 'One for the Money',
      description:
        'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.',
      image: '../../../assets/img/1928.png',
      price: 2561,
      stock: 10,
      featured: false,
      active: true,
    },
    {
      id: 19,
      catId: 1,
      name: 'Missing, The',
      description:
        'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
      image: '../../../assets/img/1929.png',
      price: 3156,
      stock: 4,
      featured: false,
      active: true,
    },
    {
      id: 20,
      catId: 2,
      name: 'Bingo Long Traveling All-Stars & Motor Kings, The',
      description:
        'Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae, Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
      image: '../../../assets/img/1930.png',
      price: 2917,
      stock: 10,
      featured: true,
      active: true,
    },
    {
      id: 21,
      catId: 2,
      name: 'Living with the Fosters',
      description:
        'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
      image: '../../../assets/img/1931.png',
      price: 2528,
      stock: 6,
      featured: false,
      active: true,
    },
    {
      id: 22,
      catId: 2,
      name: 'Samurai Rebellion (Jôi-uchi: Hairyô tsuma shimatsu)',
      description:
        'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
      image: '../../../assets/img/1932.png',
      price: 3418,
      stock: 3,
      featured: true,
      active: false,
    },
    {
      id: 23,
      catId: 1,
      name: 'Blue Crush',
      description:
        'Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
      image: '../../../assets/img/1933.png',
      price: 2776,
      stock: 8,
      featured: true,
      active: true,
    },
    {
      id: 24,
      catId: 3,
      name: 'Laputa: Castle in the Sky (Tenkû no shiro Rapyuta)',
      description:
        'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.',
      image: '../../../assets/img/1934.png',
      price: 3341,
      stock: 3,
      featured: false,
      active: true,
    },
    {
      id: 25,
      catId: 3,
      name: 'Small Town Gay Bar',
      description: 'Fusce consequat. Nulla nisl. Nunc nisl.',
      image: '../../../assets/img/1935.png',
      price: 3309,
      stock: 7,
      featured: false,
      active: false,
    },
    {
      id: 26,
      catId: 3,
      name: 'Deuce Bigalow: Male Gigolo',
      description:
        'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
      image: '../../../assets/img/1936.png',
      price: 2917,
      stock: 10,
      featured: true,
      active: true,
    },
    {
      id: 27,
      catId: 3,
      name: 'Wrong Turn 3: Left for Dead',
      description:
        'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.',
      image: '../../../assets/img/1937.png',
      price: 2941,
      stock: 5,
      featured: false,
      active: false,
    },
    {
      id: 28,
      catId: 2,
      name: 'Home Sweet Home',
      description:
        'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.',
      image: '../../../assets/img/1938.png',
      price: 3359,
      stock: 8,
      featured: false,
      active: false,
    },
    {
      id: 29,
      catId: 3,
      name: 'Lakota Woman: Siege at Wounded Knee',
      description:
        'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.',
      image: '../../../assets/img/1939.png',
      price: 3242,
      stock: 6,
      featured: true,
      active: false,
    },
    {
      id: 30,
      catId: 2,
      name: 'Last Remake of Beau Geste, The',
      description:
        'Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.',
      image: '../../../assets/img/1940.png',
      price: 3390,
      stock: 2,
      featured: true,
      active: true,
    },
    {
      id: 31,
      catId: 3,
      name: 'Julian Po',
      description:
        'Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
      image: '../../../assets/img/1941.png',
      price: 3162,
      stock: 5,
      featured: true,
      active: true,
    },
    {
      id: 32,
      catId: 1,
      name: 'Silencers, The',
      description:
        'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
      image: '../../../assets/img/1942.png',
      price: 2780,
      stock: 9,
      featured: false,
      active: false,
    },
    {
      id: 33,
      catId: 1,
      name: 'Cleopatra',
      description:
        'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
      image: '../../../assets/img/1943.png',
      price: 2898,
      stock: 8,
      featured: false,
      active: false,
    },
    {
      id: 34,
      catId: 2,
      name: 'Madhouse',
      description:
        'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.',
      image: '../../../assets/img/1944.png',
      price: 2502,
      stock: 8,
      featured: false,
      active: false,
    },
    {
      id: 35,
      catId: 2,
      name: 'Shoah',
      description: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.',
      image: '../../../assets/img/1945.png',
      price: 3053,
      stock: 8,
      featured: true,
      active: true,
    },
    {
      id: 36,
      catId: 3,
      name: 'Drift',
      description:
        'Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
      image: '../../../assets/img/1946.png',
      price: 3405,
      stock: 7,
      featured: true,
      active: false,
    },
    {
      id: 37,
      catId: 2,
      name: '7500',
      description: 'Fusce consequat. Nulla nisl. Nunc nisl.',
      image: '../../../assets/img/1947.png',
      price: 2649,
      stock: 8,
      featured: false,
      active: false,
    },
    {
      id: 38,
      catId: 2,
      name: 'Amazing Grace',
      description:
        'Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.',
      image: '../../../assets/img/1948.png',
      price: 3203,
      stock: 8,
      featured: true,
      active: true,
    },
    {
      id: 39,
      catId: 2,
      name: 'Starbuck',
      description:
        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae, Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.',
      image: '../../../assets/img/1949.png',
      price: 2811,
      stock: 4,
      featured: true,
      active: true,
    },
    {
      id: 40,
      catId: 3,
      name: 'Prom Night',
      description:
        'Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.',
      image: '../../../assets/img/1950.png',
      price: 3006,
      stock: 3,
      featured: false,
      active: false,
    },
    {
      id: 41,
      catId: 1,
      name: 'Possession',
      description:
        'In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.',
      image: '../../../assets/img/1951.png',
      price: 3007,
      stock: 4,
      featured: false,
      active: false,
    },
    {
      id: 42,
      catId: 2,
      name: "Small Change (Argent de poche, L')",
      description:
        'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
      image: '../../../assets/img/1952.png',
      price: 3135,
      stock: 4,
      featured: false,
      active: true,
    },
    {
      id: 43,
      catId: 3,
      name: 'Tales of Ordinary Madness (Storie di Ordinaria Follia)',
      description:
        'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
      image: '../../../assets/img/1953.png',
      price: 3448,
      stock: 8,
      featured: false,
      active: true,
    },
    {
      id: 44,
      catId: 1,
      name: 'Long Time Dead',
      description:
        'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
      image: '../../../assets/img/1954.png',
      price: 2818,
      stock: 6,
      featured: true,
      active: false,
    },
    {
      id: 45,
      catId: 1,
      name: 'Breach, The (Rupture, La)',
      description:
        'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
      image: '../../../assets/img/1955.png',
      price: 2731,
      stock: 1,
      featured: true,
      active: false,
    },
    {
      id: 46,
      catId: 2,
      name: "Don't Deliver Us from Evil (Mais ne nous délivrez pas du mal)",
      description:
        'Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      image: '../../../assets/img/1956.png',
      price: 2915,
      stock: 4,
      featured: false,
      active: true,
    },
    {
      id: 47,
      catId: 3,
      name: 'Promise Me This (Zavet)',
      description:
        'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
      image: '../../../assets/img/1957.png',
      price: 2504,
      stock: 6,
      featured: true,
      active: false,
    },
    {
      id: 48,
      catId: 1,
      name: 'Vera Cruz',
      description:
        'Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.',
      image: '../../../assets/img/1958.png',
      price: 3056,
      stock: 3,
      featured: false,
      active: true,
    },
    {
      id: 49,
      catId: 2,
      name: 'Shadow Company',
      description:
        'In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.',
      image: '../../../assets/img/1959.png',
      price: 3306,
      stock: 2,
      featured: false,
      active: true,
    },
    {
      id: 50,
      catId: 2,
      name: 'Princess (Prinsessa)',
      description:
        'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae, Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
      image: '../../../assets/img/1960.png',
      price: 3140,
      stock: 2,
      featured: false,
      active: false,
    },
    {
      id: 51,
      catId: 2,
      name: 'Winning Team, The',
      description:
        'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
      image: '../../../assets/img/1961.png',
      price: 2606,
      stock: 9,
      featured: true,
      active: false,
    },
    {
      id: 52,
      catId: 1,
      name: 'Winter Kills',
      description:
        'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.',
      image: '../../../assets/img/1962.png',
      price: 3281,
      stock: 4,
      featured: true,
      active: true,
    },
    {
      id: 53,
      catId: 1,
      name: 'Cencoroll',
      description:
        'Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.',
      image: '../../../assets/img/1963.png',
      price: 2993,
      stock: 4,
      featured: false,
      active: true,
    },
    {
      id: 54,
      catId: 2,
      name: 'So Much Water',
      description: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.',
      image: '../../../assets/img/1964.png',
      price: 3425,
      stock: 4,
      featured: true,
      active: true,
    },
    {
      id: 55,
      catId: 2,
      name: 'Invisible Woman, The',
      description:
        'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae, Duis faucibus accumsan odio.',
      image: '../../../assets/img/1965.png',
      price: 2965,
      stock: 7,
      featured: true,
      active: false,
    },
    {
      id: 56,
      catId: 3,
      name: 'Door in the Floor, The',
      description:
        'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
      image: '../../../assets/img/1966.png',
      price: 3371,
      stock: 7,
      featured: true,
      active: true,
    },
    {
      id: 57,
      catId: 1,
      name: 'Tattoo Nation',
      description:
        'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
      image: '../../../assets/img/1967.png',
      price: 2737,
      stock: 10,
      featured: false,
      active: false,
    },
    {
      id: 58,
      catId: 2,
      name: 'Night and Day (Bam gua nat)',
      description:
        'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
      image: '../../../assets/img/1968.png',
      price: 2677,
      stock: 4,
      featured: true,
      active: false,
    },
    {
      id: 59,
      catId: 2,
      name: 'Strong Man, The',
      description:
        'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
      image: '../../../assets/img/1969.png',
      price: 2797,
      stock: 9,
      featured: true,
      active: true,
    },
    {
      id: 60,
      catId: 3,
      name: 'In the Midst of Life (Au coeur de la vie)',
      description:
        'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
      image: '../../../assets/img/1970.png',
      price: 3046,
      stock: 9,
      featured: true,
      active: true,
    },
    {
      id: 61,
      catId: 1,
      name: 'Summer Stock',
      description:
        'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.',
      image: '../../../assets/img/1971.png',
      price: 3150,
      stock: 1,
      featured: false,
      active: false,
    },
    {
      id: 62,
      catId: 1,
      name: 'Happiness (Schastye)',
      description:
        'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
      image: '../../../assets/img/1972.png',
      price: 3393,
      stock: 5,
      featured: true,
      active: false,
    },
    {
      id: 63,
      catId: 1,
      name: 'Prom Night',
      description:
        'Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
      image: '../../../assets/img/1973.png',
      price: 3378,
      stock: 10,
      featured: false,
      active: false,
    },
    {
      id: 64,
      catId: 3,
      name: 'Eye for an Eye',
      description:
        'Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.',
      image: '../../../assets/img/1974.png',
      price: 3158,
      stock: 3,
      featured: false,
      active: false,
    },
    {
      id: 65,
      catId: 2,
      name: 'The Golden Voyage of Sinbad',
      description:
        'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
      image: '../../../assets/img/1975.png',
      price: 2577,
      stock: 9,
      featured: true,
      active: true,
    },
    {
      id: 66,
      catId: 1,
      name: 'Theodora Goes Wild',
      description:
        'Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
      image: '../../../assets/img/1976.png',
      price: 3104,
      stock: 8,
      featured: true,
      active: false,
    },
    {
      id: 67,
      catId: 1,
      name: 'Lucky',
      description:
        'Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      image: '../../../assets/img/1977.png',
      price: 2953,
      stock: 3,
      featured: true,
      active: false,
    },
    {
      id: 68,
      catId: 3,
      name: 'Shepard & Dark',
      description:
        'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae, Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
      image: '../../../assets/img/1978.png',
      price: 3413,
      stock: 5,
      featured: true,
      active: true,
    },
    {
      id: 69,
      catId: 2,
      name: 'Circus, The',
      description:
        'Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.',
      image: '../../../assets/img/1979.png',
      price: 3115,
      stock: 9,
      featured: true,
      active: true,
    },
    {
      id: 70,
      catId: 2,
      name: 'Melvin Goes to Dinner',
      description:
        'Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.',
      image: '../../../assets/img/1980.png',
      price: 3335,
      stock: 7,
      featured: true,
      active: true,
    },
    {
      id: 71,
      catId: 3,
      name: 'Magic & Bird: A Courtship of Rivals',
      description:
        'Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.',
      image: '../../../assets/img/1981.png',
      price: 2933,
      stock: 8,
      featured: true,
      active: false,
    },
    {
      id: 72,
      catId: 2,
      name: 'Enter the Phoenix (Da lao ai mei li)',
      description:
        'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.',
      image: '../../../assets/img/1982.png',
      price: 2644,
      stock: 4,
      featured: true,
      active: false,
    },
    {
      id: 73,
      catId: 3,
      name: 'Seven Sinners',
      description:
        'Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.',
      image: '../../../assets/img/1983.png',
      price: 3041,
      stock: 10,
      featured: true,
      active: false,
    },
    {
      id: 74,
      catId: 2,
      name: 'Student, The (El estudiante)',
      description:
        'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.',
      image: '../../../assets/img/1984.png',
      price: 2743,
      stock: 10,
      featured: false,
      active: true,
    },
    {
      id: 75,
      catId: 2,
      name: "'Salem's Lot",
      description:
        'Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.',
      image: '../../../assets/img/1985.png',
      price: 2608,
      stock: 4,
      featured: false,
      active: true,
    },
    {
      id: 76,
      catId: 1,
      name: 'A Rumor Of War',
      description:
        'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.',
      image: '../../../assets/img/1986.png',
      price: 2569,
      stock: 10,
      featured: false,
      active: true,
    },
    {
      id: 77,
      catId: 2,
      name: 'Fourth Kind, The',
      description:
        'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
      image: '../../../assets/img/1987.png',
      price: 2741,
      stock: 9,
      featured: true,
      active: true,
    },
    {
      id: 78,
      catId: 1,
      name: 'Mad Hot Ballroom',
      description:
        'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
      image: '../../../assets/img/1988.png',
      price: 2892,
      stock: 5,
      featured: true,
      active: true,
    },
    {
      id: 79,
      catId: 3,
      name: 'Pornstar: The Legend of Ron Jeremy',
      description:
        'Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
      image: '../../../assets/img/1989.png',
      price: 2637,
      stock: 5,
      featured: true,
      active: false,
    },
    {
      id: 80,
      catId: 1,
      name: 'Shock to the System, A',
      description:
        'Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.',
      image: '../../../assets/img/1990.png',
      price: 2820,
      stock: 8,
      featured: false,
      active: false,
    },
    {
      id: 81,
      catId: 2,
      name: 'Tokyo!',
      description:
        'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
      image: '../../../assets/img/1991.png',
      price: 3038,
      stock: 8,
      featured: true,
      active: true,
    },
    {
      id: 82,
      catId: 3,
      name: 'Pandora and the Flying Dutchman',
      description:
        'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
      image: '../../../assets/img/1992.png',
      price: 2752,
      stock: 1,
      featured: true,
      active: true,
    },
    {
      id: 83,
      catId: 2,
      name: 'Man of a Thousand Faces',
      description:
        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae, Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.',
      image: '../../../assets/img/1993.png',
      price: 2651,
      stock: 5,
      featured: true,
      active: false,
    },
    {
      id: 84,
      catId: 3,
      name: 'Lunch Break',
      description:
        'In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.',
      image: '../../../assets/img/1994.png',
      price: 3351,
      stock: 2,
      featured: true,
      active: false,
    },
    {
      id: 85,
      catId: 2,
      name: 'Rumble on the Docks',
      description:
        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae, Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
      image: '../../../assets/img/1995.png',
      price: 2788,
      stock: 4,
      featured: true,
      active: false,
    },
    {
      id: 86,
      catId: 3,
      name: 'Comradeship (Kameradschaft)',
      description:
        'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.',
      image: '../../../assets/img/1996.png',
      price: 3478,
      stock: 7,
      featured: true,
      active: false,
    },
    {
      id: 87,
      catId: 1,
      name: "Liar's Dice",
      description:
        'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
      image: '../../../assets/img/1997.png',
      price: 3031,
      stock: 7,
      featured: true,
      active: false,
    },
    {
      id: 88,
      catId: 3,
      name: 'Beaches',
      description:
        'Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.',
      image: '../../../assets/img/1998.png',
      price: 2954,
      stock: 3,
      featured: false,
      active: true,
    },
    {
      id: 89,
      catId: 2,
      name: 'Knuckleball!',
      description:
        'Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.',
      image: '../../../assets/img/1999.png',
      price: 3089,
      stock: 4,
      featured: false,
      active: false,
    },
    {
      id: 90,
      catId: 2,
      name: 'Reflecting Skin, The',
      description:
        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae, Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.',
      image: '../../../assets/img/2000.png',
      price: 2754,
      stock: 1,
      featured: true,
      active: false,
    },
    {
      id: 91,
      catId: 2,
      name: 'Dilemma, The',
      description:
        'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
      image: '../../../assets/img/2001.png',
      price: 2803,
      stock: 10,
      featured: false,
      active: false,
    },
    {
      id: 92,
      catId: 1,
      name: 'Visual Acoustics',
      description:
        'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
      image: '../../../assets/img/2002.png',
      price: 3109,
      stock: 1,
      featured: true,
      active: false,
    },
    {
      id: 93,
      catId: 3,
      name: 'Color of Friendship, The',
      description:
        'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
      image: '../../../assets/img/2003.png',
      price: 3011,
      stock: 9,
      featured: false,
      active: true,
    },
    {
      id: 94,
      catId: 1,
      name: 'Tokyo Story (Tôkyô monogatari)',
      description:
        'Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.',
      image: '../../../assets/img/2004.png',
      price: 2757,
      stock: 8,
      featured: false,
      active: false,
    },
    {
      id: 95,
      catId: 2,
      name: 'Love Me Tender',
      description:
        'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
      image: '../../../assets/img/2005.png',
      price: 3233,
      stock: 2,
      featured: false,
      active: false,
    },
    {
      id: 96,
      catId: 3,
      name: 'Burnt Money (Plata Quemada)',
      description:
        'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
      image: '../../../assets/img/2006.png',
      price: 3048,
      stock: 8,
      featured: false,
      active: true,
    },
    {
      id: 97,
      catId: 3,
      name: 'Love, Marilyn',
      description:
        'Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.',
      image: '../../../assets/img/2007.png',
      price: 2871,
      stock: 8,
      featured: true,
      active: false,
    },
    {
      id: 98,
      catId: 3,
      name: 'Trip to the Moon, A (Voyage dans la lune, Le)',
      description:
        'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.',
      image: '../../../assets/img/2008.png',
      price: 3388,
      stock: 5,
      featured: true,
      active: false,
    },
    {
      id: 99,
      catId: 2,
      name: 'Toast of New York, The',
      description:
        'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
      image: '../../../assets/img/2009.png',
      price: 3116,
      stock: 4,
      featured: false,
      active: false,
    },
    {
      id: 100,
      catId: 2,
      name: 'Married Woman, A (Une femme mariée)',
      description:
        'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
      image: '../../../assets/img/2010.png',
      price: 2703,
      stock: 2,
      featured: true,
      active: false,
    },
  ];

  categoryList: Category[] = [
    {
      id: 1,
      name: 'Documentary',
      description:
        'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    },
    { id: 2, name: 'Comedy', description: 'In quis justo.' },
    {
      id: 3,
      name: 'Adventure',
      description:
        'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    },
  ];

  constructor(private http: HttpClient) {}
}

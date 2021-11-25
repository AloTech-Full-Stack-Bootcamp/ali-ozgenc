import { series } from "./data.js";
import { fancyLogSeriesReport } from "./utils.js";

export function SeriesTracker(series) {
  this.numberOfWatched = 0;
  this.numberOfUnWatched = 0;
  this.series = [];
  this.lastSerie = undefined;
  this.currentSerie = undefined;
  this.nextSerie = undefined;

  this.add = function (serie) {
    this.series.push(serie);
    if (serie.isWatched) {
      //İzlendiği için izlenenler sayacını arttırır
      this.numberOfWatched += 1;
      if (!this.lastSerie) {
        //Eğer son izlenen seri yoksa son izlenen seri olarak atanır
        this.lastSerie = serie;
      }
      if (
        //Datadaki zaman bilgisi içeren son izlenen filmi doğru ayarlamak için kullanılır
        new Date(serie.finishedDate).valueOf() >
        new Date(this.lastSerie.finishedDate).valueOf()
      ) {
        this.lastSerie = serie;
      }
    } else {
      //İzlenmediği için izlenmeyenler sayacını arttırır
      this.numberOfUnWatched += 1;
      if (serie.isCurrent) {
        //isCurrent değeri true ise currentSerie değişkenine atanır
        this.currentSerie = serie;
      } else if (!this.nextSerie) {
        //Eğer nextSerie değişkeni boş ise nextSerie değişkenine atanır
        this.nextSerie = serie;
      }
    }
  };

  if (series.length > 0) {
    //Serileri döngüye sokarak ekleme yapılır
    series.forEach((serie) => {
      this.add(serie);
    });
  }

  this.finishSerie = function () {
    this.series.map((serie) => {
      if (serie.isCurrent) {
        //Film izlendikten sonra isCurrent değeri false yapılır ve film izlendiği için isWatch değeri true yapılır
        serie.isCurrent = false;
        serie.isWatched = true;
      }
      if (this.nextSerie && serie.id === this.nextSerie.id) {
        //Film izlendikten sonra nextSerie değişkeni boş değil ve seriemiz gelecek filmin id si ile eşleşiyorsa isCurrent değeri true yapılır
        serie.isCurrent = true;
      }
      return serie;
    });
    //En son izlenen anlık filmi lastSerie değişkenine atanır
    this.lastSerie = this.currentSerie;
    //Yeni izlenecek anlık filme nextSerie değişkeni atanır
    this.currentSerie = this.nextSerie;
    //İzlenemiş ve Anlık izlenecek film olmayan ilk filmi bulur liste içindeki ve nextSerie değişkenine atar
    this.nextSerie = this.series.find((serie) => {
      return !serie.isWatched && !serie.isCurrent;
    });
    //İzlenen film sayacını arttırır
    this.numberOfWatched += 1;
    //İzlenmemiş film sayacını azaltır
    this.numberOfUnWatched -= 1;
    //finishSerie çağrıldıkça film izlenir ve SerieTracker en son izlenen, izlenmesi beklenen ve izlenilecek olan film durumlarını tutar
  };
  this.printSeriesReport = function () {
    fancyLogSeriesReport(this);
  };
}

// Case 1
// -------------------------------------------------

/* const mySeriesTracker = new SeriesTracker(series);
mySeriesTracker.printSeriesReport(); */

// Case 2
// -------------------------------------------------

/* const mySeriesTracker = new SeriesTracker(series);
mySeriesTracker.finishSerie();
mySeriesTracker.printSeriesReport(); */

// Case 3
// -------------------------------------------------

/* const mySeriesTracker = new SeriesTracker(series);
const newSerie = {
  id: "9",
  name: "Lost",
  genre: "Adventure",
  directorId: "4"
};
mySeriesTracker.add(newSerie);
mySeriesTracker.printSeriesReport(); */

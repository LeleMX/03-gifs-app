import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { GifService } from '../../services/gifs.service';
import { GifListComponent } from "../../components/gif-list/gif-list.component";

@Component({
  selector: 'gif-history',
  templateUrl: './gif-history.component.html',
  imports: [GifListComponent],
})
export default class GifHistoryComponent {
  gifService = inject(GifService);

  query = toSignal(
    inject(ActivatedRoute).params.pipe(map((params) => params['query']))
  );

  gifByKey = computed(() => {
    return this.gifService.getHistoryGifs(this.query());
  });
}

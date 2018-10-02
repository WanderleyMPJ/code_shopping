import { NgModule } from '@angular/core';
import { IsCurrentUserPipe } from './is-current-user/is-current-user';
import { BuildUrlPipe } from './build-url/build-url';
@NgModule({
	declarations: [IsCurrentUserPipe,
    BuildUrlPipe],
	imports: [],
	exports: [IsCurrentUserPipe,
    BuildUrlPipe]
})
export class PipesModule {}

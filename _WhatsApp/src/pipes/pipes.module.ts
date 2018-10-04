import { NgModule } from '@angular/core';
import { IsCurrentUserPipe } from './is-current-user/is-current-user';
import { BuildUrlPipe } from './build-url/build-url';
import { ColorFirstLatterPipe } from './color-first-latter/color-first-latter';
@NgModule({
	declarations: [IsCurrentUserPipe,
    BuildUrlPipe,
    ColorFirstLatterPipe],
	imports: [],
	exports: [IsCurrentUserPipe,
    BuildUrlPipe,
    ColorFirstLatterPipe]
})
export class PipesModule {}

const clonedeep = require( 'lodash.clonedeep' );

const c_heading = clonedeep( require( '../../components/c-heading/c-heading.prototype' ) );
const o_card_list = clonedeep( require( '../../objects/o-card-list/o-card-list.prototype' ) );

c_heading.c_heading_text = 'Related Stories';
c_heading.c_heading_classes = 'lrv-u-font-family-secondary lrv-u-font-size-28 lrv-u-font-size-40@tablet lrv-u-font-size-46@desktop-xl lrv-u-padding-r-1';
c_heading.c_heading_outer = true;
c_heading.c_heading_outer_classes = 'a-heading-border lrv-u-margin-b-1';

o_card_list.o_card_list_classes += ' lrv-a-grid a-cols3@tablet';

o_card_list.o_card_list_items.map( ( o_card ) => {

	o_card.o_card_classes = 'lrv-u-flex u-flex-direction-column@tablet';

	o_card.c_lazy_image.c_lazy_image_classes = 'u-width-30p@mobile-max lrv-u-flex-shrink-0 lrv-u-margin-r-1 lrv-u-margin-r-00@tablet';
	o_card.c_lazy_image.c_lazy_image_crop_class = 'lrv-a-crop-2x3';

	o_card.c_span.c_span_text = 'news';
	o_card.c_span.c_span_classes += ' lrv-u-font-size-12@mobile-max lrv-u-font-family-primary lrv-u-font-weight-bold lrv-u-display-block lrv-u-padding-b-050 u-letter-spacing-012 u-text-transform-lowercase';
	o_card.c_span.c_span_url = '#';

	o_card.c_title.c_title_text = 'Guggenheim’s Hilma af Klint Survey Is Most Popular Show in Its History';
	o_card.c_title.c_title_classes = 'lrv-u-font-family-primary lrv-u-font-size-14@mobile-max lrv-u-font-size-16 u-font-size-22@desktop-xl lrv-u-font-weight-normal';
	o_card.c_title.c_title_link_classes = 'lrv-u-color-black';

	o_card.c_timestamp = false;
} );

module.exports = {
	profile_related_stories_classes: '',
	c_heading: c_heading,
	o_card_list: o_card_list,
}

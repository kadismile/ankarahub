
(function ($) {
    "use strict";

    jQuery(document).ready(function () {

        /* Mobile */
        if ($(window).width() < 767) {

            /* Menu Mobile Navigation */
            var spt_mobile_button_open = '.spt_mobile_button_open';
            var spt_mobile_button_close = '.spt_mobile_button_close';
            var spt_mobile_content_opened = '.spt_mobile_content_open';

            $(spt_mobile_button_open).on('click', function () {
                var self = $(this);
                var spt_mobile_content_open = self.parent().find('.spt_mobile_content_open');
                $(spt_mobile_content_opened).removeClass('spt_mobile_active');
                $(spt_mobile_button_open).removeClass('spt_mobile_active');
                self.addClass('spt_mobile_active');
                $(spt_mobile_content_open).addClass('spt_mobile_active');
            });
            $(spt_mobile_button_close).on('click', function () {
                $(spt_mobile_button_open).removeClass('spt_mobile_active');
                $(spt_mobile_content_opened).removeClass('spt_mobile_active');
            });

            /* SubMenu Navigation */
            var spt_mobile_button_open_submenu_subcontent = '.spt_mobile_button_submenu_open';
            $(spt_mobile_button_open_submenu_subcontent).on('click', function () {
                var self = $(this);
                if (self.hasClass('spt_active')) {
                    self.removeClass('spt_active');
                    self.removeClass('fa-long-arrow-up').addClass('fa-long-arrow-down');
                    self.parent().find('.spt_mobile_content_open_submenu').removeClass('spt_mobile_active');
                } else {
                    self.addClass('spt_active');
                    self.removeClass('fa-long-arrow-down').addClass('fa-long-arrow-up');
                    self.parent().find('.spt_mobile_content_open_submenu').addClass('spt_mobile_active');
                }
            });

            /* SubContent */
            var spt_mobile_button_open_subcontent = '.spt_mobile_button_open_subcontent';
            var spt_mobile_button_close_subcontent = '.spt_mobile_button_close_subcontent';
            $(spt_mobile_button_open_subcontent).on('click', function () {
                var self = $(this);
                self.parents('.spt_mobile_subcontent').find('.spt_mobile_subcontent_open').addClass('spt_mobile_active');
            });
            $(spt_mobile_button_close_subcontent).on('click', function () {
                var self = $(this);
                self.parent().removeClass('spt_mobile_active');
            });

            /* Search */
            var spt_mobile_header_search_form_open = '.spt_mobile_header_search_form_open';
            var spt_mobile_header_search_form_close = '.spt_mobile_header_search_form_close';

            $(spt_mobile_header_search_form_open).on('click', function () {
                var self = $(this);
                self.parent().find('form').addClass('spt_mobile_active');
            });
            $(spt_mobile_header_search_form_close).on('click', function () {
                var self = $(this);
                self.parent().removeClass('spt_mobile_active');
            });

        }

        /* Product Best */
        var spt_product_select_best = '.spt_main_best_products li';
        var spt_product_select_best_selected = '.spt_main_best_product_preview';
        var spt_product_select_best_selected_img = '.spt_main_best_product_preview .spt_main_best_product_image';
        $(spt_product_select_best).on('click', function () {
            var self = $(this);
            $(spt_product_select_best).removeClass('spt_active');
            self.addClass('spt_active');
            var spt_product_select_best_value_id = self.find('div').attr('data-id');
            var spt_product_select_best_value_img = self.find('img').attr('src');
            $(spt_product_select_best_selected).find('input').attr('value', spt_product_select_best_value_id);
            $(spt_product_select_best_selected).find('img').attr('src', spt_product_select_best_value_img);
            $(spt_product_select_best_selected_img).attr('data-product', spt_product_select_best_value_id);
        });

        /* Product Bags */
        var spt_product_bag = '.spt_bag_carousel_image';
        var spt_product_bag_selected = '.spt_bag_product';
        $(spt_product_bag).on('click', function () {
            var self = $(this);
            $(spt_product_bag).removeClass('spt_active');
            self.addClass('spt_active');
            var spt_product_bag_img = self.find('img').attr('src');
            $(spt_product_bag_selected).find('img').attr('src', spt_product_bag_img);
        });

        /* Open Navigation */
        var spt_navigation_submenu_open = '.spt_navigation_submenu_open';
        $(spt_navigation_submenu_open).on('click', function () {
            var self = $(this);
            if (self.hasClass('fa-caret-down')) {
                self.parent().parent().find('.fa-caret-up').removeClass('fa-caret-up').addClass('fa-caret-down');
                self.parent().parent().find('.spt_navigation_submenu').removeClass('spt_active');
                self.removeClass('fa-caret-down').addClass('fa-caret-up');
                self.parent().find('.spt_navigation_submenu').toggleClass('spt_active');
            } else {
                self.removeClass('fa-caret-up').addClass('fa-caret-down');
                self.parent().parent().find('.spt_navigation_submenu').removeClass('spt_active');
            }
        });

        /* Select Box */
        var spt_select_trigger = '.spt_select p';
        var spt_select_target = '.spt_select ul';
        var spt_select_target_li = '.spt_select ul li';
        var spt_select_color_trigger = '.spt_select_color span';
        var spt_select_color_trigger_val = $('.spt_select_color span').attr('data-value');
        var spt_select_color_target = '.spt_select_color ul li';
        $(spt_select_color_trigger).css({
            'background-color': spt_select_color_trigger_val
        });
        $(spt_select_color_target).each(function () {
            var self = $(this);
            var spt_select_color_target_val = self.attr('data-value');
            self.css({
                'background-color': spt_select_color_target_val
            });
        });
        $(document).on('click', spt_select_trigger, function (e) {
            e.preventDefault();
            var self = $(this);
            $(spt_select_target).removeClass('spt_active');
            self.parent().find('ul').addClass('spt_active');
            return false;
        });
        $(spt_select_target).on('click', function (e) {
            e.preventDefault();
            var self = $(this);
            var spt_selected_trigger = e.target;
            var spt_selected_target_val = self.parent().find('span');
            var li = $('li');
            if (li.is(e.target)) {
                $(spt_select_target_li).removeClass('spt_active');
                $(e.target).addClass('spt_active');
                var spt_selected_val = $(spt_selected_trigger).attr('data-value');
                $(spt_selected_target_val).attr('data-value', spt_selected_val);
                if ($(spt_selected_trigger).parent().parent().hasClass('spt_select_color')) {
                    $(spt_selected_target_val).css({
                        'background-color': spt_selected_val
                    });
                } else {
                    $(spt_selected_target_val).text(spt_selected_val);
                }
                self.removeClass('spt_active');
            } else {
                self.addClass('spt_active');
            }
            return false;
        });
        $(document).on('click', function (e) {
            if (!$(spt_select_trigger).is(e.target)) {
                $(spt_select_target).removeClass('spt_active');
            } else if (!$(spt_select_target).is(e.target)) {
                $(spt_select_target).removeClass('spt_active');
            }
        });

        /* Select Box 2 */
        var spt_select2_trigger = '.spt_select2 p';
        var spt_select2_target = '.spt_select2 ul';
        var spt_select2_target_li = '.spt_select2 ul li';
        $(document).on('click', spt_select2_trigger, function (e) {
            e.preventDefault();
            var self = $(this);
            $(spt_select2_target).removeClass('spt_active');
            self.parent().find('ul').addClass('spt_active');
            return false;
        });
        $(spt_select2_target).on('click', function (e) {
            e.preventDefault();
            var self = $(this);
            var spt_selected_trigger = e.target;
            var spt_selected_target_val = self.parent().find('input');
            var li = $('li');
            if (li.is(e.target)) {
                $(spt_select2_target_li).removeClass('spt_active');
                $(e.target).addClass('spt_active');
                var spt_selected_val = $(spt_selected_trigger).attr('data-value');
                $(spt_selected_target_val).attr('value', spt_selected_val);
                self.removeClass('spt_active');
            } else {
                self.addClass('spt_active');
            }
            return false;
        });
        $(document).on('click', function (e) {
            if (!$(spt_select2_trigger).is(e.target)) {
                $(spt_select2_target).removeClass('spt_active');
            } else if (!$(spt_select2_target).is(e.target)) {
                $(spt_select2_target).removeClass('spt_active');
            }
        });

        /* Select Box 3 */
        var spt_select3_trigger = '.spt_select3 p';
        var spt_select3_target = '.spt_select3 ul';
        var spt_select3_target_li = '.spt_select3 ul li';
        $(document).on('click', spt_select3_trigger, function (e) {
            e.preventDefault();
            var self = $(this);
            $(spt_select3_target).removeClass('spt_active');
            self.parent().find('ul').addClass('spt_active');
            return false;
        });
        $(spt_select3_target).on('click', function (e) {
            e.preventDefault();
            var self = $(this);
            var spt_selected_trigger = e.target;
            var spt_selected_target_val = self.parent().find('input');
            var li = $('li');
            if (li.is(e.target)) {
                $(spt_select3_target_li).removeClass('spt_active');
                $(e.target).addClass('spt_active');
                var spt_selected_val = $(spt_selected_trigger).attr('data-value');
                $(spt_selected_target_val).attr('value', spt_selected_val);
                self.removeClass('spt_active');
            } else {
                self.addClass('spt_active');
            }
            return false;
        });
        $(document).on('click', function (e) {
            if (!$(spt_select3_trigger).is(e.target)) {
                $(spt_select3_target).removeClass('spt_active');
            } else if (!$(spt_select3_target).is(e.target)) {
                $(spt_select3_target).removeClass('spt_active');
            }
        });

        /* Select Box 4 */
        var spt_select4_trigger = '.spt_select4 p';
        var spt_select4_target = '.spt_select4 ul';
        var spt_select4_target_li = '.spt_select4 ul li';
        $(document).on('click', spt_select4_trigger, function (e) {
            e.preventDefault();
            var self = $(this);
            $(spt_select4_target).removeClass('spt_active');
            self.parent().find('ul').addClass('spt_active');
            return false;
        });
        $(spt_select4_target).on('click', function (e) {
            e.preventDefault();
            var self = $(this);
            var spt_selected_trigger = e.target;
            var spt_selected_target_val = self.parent().find('input');
            var li = $('li');
            if (li.is(e.target)) {
                $(spt_select4_target_li).removeClass('spt_active');
                $(e.target).addClass('spt_active');
                var spt_selected_val = $(spt_selected_trigger).attr('data-value');
                $(spt_selected_target_val).attr('value', spt_selected_val);
                self.removeClass('spt_active');
            } else {
                self.addClass('spt_active');
            }
            return false;
        });
        $(document).on('click', function (e) {
            if (!$(spt_select4_trigger).is(e.target)) {
                $(spt_select4_target).removeClass('spt_active');
            } else if (!$(spt_select4_target).is(e.target)) {
                $(spt_select4_target).removeClass('spt_active');
            }
        });

        /* Quantity */
        var spt_quantity_minus = '.spt_main_quantity_minus';
        var spt_quantity_plus = '.spt_main_quantity_plus';
        $(spt_quantity_minus).on('click', function (e) {
            e.preventDefault();
            var self = $(this);
            var fieldName = self.attr('data-action');
            var fieldName_input = self.parent().find('input[name=' + fieldName + ']');
            var currentVal = parseInt(fieldName_input.val(), 10);
            if (!isNaN(currentVal)) {
                fieldName_input.val(currentVal + 1);
            } else {
                fieldName_input.val(0);
            }
        });
        $(spt_quantity_plus).on('click', function (e) {
            e.preventDefault();
            var self = $(this);
            var fieldName = self.attr('data-action');
            var fieldName_input_m = self.parent().find('input[name=' + fieldName + ']');
            var currentVal = parseInt(fieldName_input_m.val(), 10);
            if (!isNaN(currentVal) && currentVal > 0) {
                fieldName_input_m.val(currentVal - 1);
            } else {
                fieldName_input_m.val(0);
            }
        });

        /* Preloader */
        var spt_preloader = '#spt_preloader';
        $(spt_preloader).removeClass('spt_active');

        /* Filters */
        var spt_main_filter_item = '.spt_main_filter input';
        $(spt_main_filter_item).each(function () {
            var self = $(this);
            self.next().css({
                'background-color': self.val()
            });
        });
        $(spt_main_filter_item).on('click', function () {
            $(spt_main_filter_item).each(function () {
                var self = $(this);
                self.css({
                    'background-color': self.val()
                });
            });
        });
        var spt_main_filter_price = '#spt_main_filter_price';
        var spt_main_filter_price_results = '.spt_main_filter_price_results';
        var spt_main_filter_price_range = '.spt_main_filter_price_range';
        $(document).on('input', spt_main_filter_price, function () {
            var self = $(this);
            var spt_main_filter_price_range_results = self.val() / 10;
            $(spt_main_filter_price_range).css({
                'width': spt_main_filter_price_range_results + '%'
            });
            $(spt_main_filter_price_results).html('$' + self.val());
        });

        /* Best Section */
        var spt_main_best_nav_menu = '.spt_main_best_nav li';
        var spt_main_best_products_item = '.spt_main_best_products li';
        $(spt_main_best_nav_menu).on('click', function (e) {
            var spt_main_best_nav_menu_item = $(this);
            $(spt_main_best_nav_menu).removeClass('spt_active');
            spt_main_best_nav_menu_item.addClass('spt_active');


            if (spt_main_best_nav_menu_item.attr('data-products') === '*') {
                $(spt_main_best_products_item).each(function () {
                    var self = $(this);
                    if (self.hasClass('spt_visible')) {
                        self.removeClass('spt_hide');
                    } else {
                        self.removeClass('spt_hide').addClass('spt_visible');
                    }
                });
            } else {
                $(spt_main_best_products_item).each(function () {
                    var self = $(this);
                    if (self.attr('data-product') === $(spt_main_best_nav_menu_item).attr('data-products')) {
                        if (self.hasClass('spt_visible')) {
                            self.removeClass('spt_hide');
                        } else {
                            self.removeClass('spt_hide').addClass('spt_visible');
                        }
                    } else {
                        if (self.hasClass('spt_visible')) {
                            self.removeClass('spt_visible').addClass('spt_hide');
                        }
                    }
                });
            }
        });

        /* Dropdown */
        var spt_element_dropdown_trigger = '.spt_drop_down a';
        var spt_element_dropdown_target = '.spt_drop_down ul';
        var spt_element_dropdown_target_li = '.spt_drop_down ul li';
        $(document).on('click', spt_element_dropdown_trigger, function (e) {
            e.preventDefault();
            var self = $(this);
            $(spt_element_dropdown_trigger).removeClass('spt_active');
            $(spt_element_dropdown_target).removeClass('spt_active');
            self.addClass('spt_active');
            self.next().addClass('spt_active');
            return false;
        });
        $(spt_element_dropdown_target).on('click', function (e) {
            e.preventDefault();
            var self = $(this);
            var spt_element_dropdown_target_li_click = e.target;
            var li = $('li');
            if (li.is(e.target)) {
                var spt_element_dropdown_target_li_val = $(spt_element_dropdown_target_li_click).attr('data-value');
                var spt_element_dropdown_target_li_text = $(spt_element_dropdown_target_li_click).text();
                self.parent().find('a').attr('data-value', spt_element_dropdown_target_li_val);
                self.parent().find('a').text(spt_element_dropdown_target_li_text);
                self.removeClass('spt_active');
                self.prev().removeClass('spt_active');
                self.find('li').removeClass('spt_active');
                $(spt_element_dropdown_target_li_click).addClass('spt_active');
            } else {
                self.addClass('spt_active');
            }
            return false;
        });
        $(document).on('click', function (e) {
            if (!$(spt_element_dropdown_trigger).is(e.target)) {
                $(spt_element_dropdown_trigger).removeClass('spt_active');
                $(spt_element_dropdown_target).removeClass('spt_active');
            } else if (!$(spt_element_dropdown_target).is(e.target)) {
                $(spt_element_dropdown_trigger).removeClass('spt_active');
                $(spt_element_dropdown_target).removeClass('spt_active');
            }
        });

        /* Login */
        var spt_virtual_shop_login = '.spt_virtual_shop_login';
        var spt_virtual_shop_login_box = '#spt_virtual_shop_login';
        var spt_virtual_shop_login_form_submit = '#spt_virtual_shop_login form input[type="submit"]';
        var spt_virtual_shop_login_form_checkbox = '#spt_virtual_shop_login form input[type="checkbox"]';
        var spt_virtual_shop_login_form_label = '#spt_virtual_shop_login form label';
        $(document).on('click', spt_virtual_shop_login, function (e) {
            e.preventDefault();
            var self = $(this);
            self.parent().find('.spt_active').removeClass('spt_active');
            $(spt_virtual_shop_login_box).addClass('spt_active');
            return false;
        });
        $(document).on('click', spt_virtual_shop_login_box, function (e) {
            e.preventDefault();
            var self = $(this);
            if ($(spt_virtual_shop_login_form_submit).is(e.target)) {
                self.removeClass('spt_active');
            } else {
                self.addClass('spt_active');
            }
            return false;
        });
        $(spt_virtual_shop_login_form_submit).on('click', function (e) {
            $(this).parent().submit();
        });
        $(spt_virtual_shop_login_form_label).on('click', function (e) {
            if ($(spt_virtual_shop_login_form_checkbox).is(':checked')) {
                $(spt_virtual_shop_login_form_checkbox).prop('checked', false);
            } else {
                $(spt_virtual_shop_login_form_checkbox).prop('checked', true);
            }
        });
        $(document).on('click', function (e) {
            if (!$(spt_virtual_shop_login).is(e.target)) {
                $(spt_virtual_shop_login_box).removeClass('spt_active');
            } else if (!$(spt_virtual_shop_login_box).is(e.target)) {
                $(spt_virtual_shop_login_box).removeClass('spt_active');
            }
        });

        /* Register */
        var spt_register_open = '#spt_virtual_shop_login a:last-child';
        var spt_register_body = '#spt_account_register';
        var spt_register_content = '#spt_account_register .spt_account_register_content';
        var spt_register_submit = '.spt_account_register_content form input[type="submit"]';
        $(document).on('click', spt_register_open, function (e) {
            e.preventDefault();
            $(spt_register_body).addClass('spt_active');
            return false;
        });
        $(spt_register_body).on('click', function (e) {
            e.preventDefault();
            var self = $(this);
            if ($(spt_register_content).is(e.target)) {
                self.addClass('spt_active');
            } else if ($(e.target).parents(spt_register_content).length > 0) {
                self.addClass('spt_active');
            } else {
                self.removeClass('spt_active');
            }
            return false;
        });
        $(spt_register_submit).on('click', function (e) {
            var self = $(this);
            self.parent().submit();
        });
        $(document).on('click', function (e) {
            if (!$(spt_register_open).is(e.target)) {
                $(spt_virtual_shop_login_box).removeClass('spt_active');
            } else if (!$(spt_register_content).is(e.target)) {
                $(spt_virtual_shop_login_box).removeClass('spt_active');
            }
        });

        /* Cart */
        var spt_virtual_shop_cart = '.spt_virtual_shop_cart';
        var spt_virtual_shop_cart_box = '#spt_virtual_shop_cart';
        var spt_virtual_shop_cart_form_submit = '#spt_virtual_shop_cart form input[type="submit"]';
        $(document).on('click', spt_virtual_shop_cart, function (e) {
            e.preventDefault();
            var self = $(this);
            self.parent().find('.spt_active').removeClass('spt_active');
            $(spt_virtual_shop_cart_box).addClass('spt_active');
            return false;
        });
        $(document).on('click', spt_virtual_shop_cart_box, function (e) {
            e.preventDefault();
            var self = $(this);
            if ($(spt_virtual_shop_cart_form_submit).is(e.target)) {
                self.removeClass('spt_active');
            } else {
                self.addClass('spt_active');
            }
            return false;
        });
        $(spt_virtual_shop_cart_form_submit).on('click', function (e) {
            var self = $(this);
            self.parent().submit();
        });
        $(document).on('click', function (e) {
            if (!$(spt_virtual_shop_cart).is(e.target)) {
                $(spt_virtual_shop_cart_box).removeClass('spt_active');
            } else if (!$(spt_virtual_shop_cart_box).is(e.target)) {
                $(spt_virtual_shop_cart_box).removeClass('spt_active');
            }
        });

        /* Single Product Carousel */
        if ($(window).width() < 1199) {
            var spt_carousel_product_direction = 'horizontal';
        } else {
            var spt_carousel_product_direction = 'vertical';
        }
        var spt_main_single_product_carousel_image = new Swiper('.spt_main_single_product_carousel_image', {
            nextButton: '.spt_main_single_product_carousel_next',
            prevButton: '.spt_main_single_product_carousel_prev',
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            direction: spt_carousel_product_direction
        });
        var spt_main_single_product_carousel_thumbs = new Swiper('.spt_main_single_product_carousel_thumbs', {
            spaceBetween: 20,
            loop: true,
            slidesPerView: 3,
            direction: spt_carousel_product_direction,
            centeredSlides: true,
            slideToClickedSlide: true
        });
        spt_main_single_product_carousel_image.params.control = spt_main_single_product_carousel_thumbs;
        spt_main_single_product_carousel_thumbs.params.control = spt_main_single_product_carousel_image;

        /* Slider */
        var spt_main_slider_2 = '.spt_home_2';
        var spt_main_slider_3 = '.spt_main_header_categories';
        if ($(spt_main_slider_3).length) {
            var spt_main_slider = new Swiper('#spt_main_slider', {
                nextButton: '#spt_main_slider .spt_main_buttons_next',
                prevButton: '#spt_main_slider .spt_main_buttons_prev',
                slidesPerView: 1,
                loop: true,
                direction: 'horizontal',
                pagination: '#spt_main_slider .spt_main_pagination',
                paginationClickable: true
            });
        } else if ($(spt_main_slider_2).length) {
            var spt_main_slider = new Swiper('#spt_main_slider', {
                nextButton: '#spt_main_slider .spt_main_buttons_next',
                prevButton: '#spt_main_slider .spt_main_buttons_prev',
                slidesPerView: 1,
                loop: true,
                direction: 'horizontal',
                pagination: '#spt_main_slider .spt_main_pagination',
                paginationClickable: true
            });
        } else {
            var spt_main_slider = new Swiper('#spt_main_slider', {
                nextButton: '#spt_main_slider .spt_main_buttons_next',
                prevButton: '#spt_main_slider .spt_main_buttons_prev',
                slidesPerView: 1,
                loop: true,
                direction: 'horizontal',
                pagination: '#spt_main_slider .spt_main_pagination',
                paginationClickable: true,
                paginationBulletRender: function (swiper, index, className) {
                    return '<span class="' + className + '">' + (index + 1) + '</span>';
                }
            });
        }

        /* Items */
        var spt_main_items = new Swiper('#spt_main_items', {
            nextButton: '#spt_main_items .spt_main_buttons_next',
            prevButton: '#spt_main_items .spt_main_buttons_prev',
            slidesPerView: 6,
            breakpoints: {
                991: {
                    slidesPerView: 4
                },
                767: {
                    slidesPerView: 3
                },
                480: {
                    slidesPerView: 1
                }
            },
            spaceBetween: 30,
            loop: true,
            direction: 'horizontal'
        });

        /* Fashion Deals */
        var spt_main_fashion_deals = new Swiper('#spt_main_fashion_deals', {
            nextButton: '#spt_main_fashion_deals .spt_main_buttons_next',
            prevButton: '#spt_main_fashion_deals .spt_main_buttons_prev',
            slidesPerView: 3,
            breakpoints: {
                991: {
                    slidesPerView: 2
                },
                767: {
                    slidesPerView: 2
                },
                480: {
                    slidesPerView: 1
                }
            },
            spaceBetween: 30,
            loop: false,
            direction: 'horizontal'
        });

        /* Bags Products Carousel */
        var spt_bag_products_carousel = new Swiper('#spt_bag_products_carousel', {
            nextButton: '#spt_bag_products_carousel .spt_main_buttons_next',
            prevButton: '#spt_bag_products_carousel .spt_main_buttons_prev',
            slidesPerView: 4,
            breakpoints: {
                991: {
                    slidesPerView: 3
                },
                767: {
                    slidesPerView: 2
                },
                480: {
                    slidesPerView: 2
                }
            },
            spaceBetween: 30,
            loop: false,
            direction: 'horizontal'
        });

        /* Testimonials */
        var spt_main_testimonials = new Swiper('#spt_main_testimonials', {
            slidesPerView: 2,
            breakpoints: {
                991: {
                    slidesPerView: 1
                },
                767: {
                    slidesPerView: 1
                },
                480: {
                    slidesPerView: 1
                }
            },
            pagination: '#spt_main_testimonials .spt_main_pagination',
            paginationClickable: true,
            spaceBetween: 30,
            loop: false,
            direction: 'horizontal'
        });
        var spt_main_testimonials2 = new Swiper('#spt_main_testimonials_2', {
            slidesPerView: 1,
            pagination: '#spt_main_testimonials_2 .spt_main_pagination',
            nextButton: '#spt_main_testimonials_2 .spt_main_buttons_next',
            prevButton: '#spt_main_testimonials_2 .spt_main_buttons_prev',
            paginationClickable: true,
            loop: false,
            direction: 'horizontal'
        });

        /* Collections */
        var spt_main_collections = new Swiper('#spt_main_collections', {
            slidesPerView: 2,
            breakpoints: {
                991: {
                    slidesPerView: 1
                },
                767: {
                    slidesPerView: 1
                },
                480: {
                    slidesPerView: 1
                }
            },
            pagination: '#spt_main_collections .spt_main_pagination',
            paginationClickable: true,
            spaceBetween: 30,
            loop: false,
            direction: 'horizontal'
        });

        /* Tabs */
        var spt_tabs_nav_item = '.spt_tabs_nav li';
        var spt_tabs_content = '.spt_tabs_content';
        var spt_tabs_content_item = '.spt_tabs_content li';
        $(spt_tabs_nav_item).on('click', function () {
            var self = $(this);
            $(spt_tabs_nav_item).removeClass('spt_active');
            self.addClass('spt_active');
            $(spt_tabs_content_item).removeClass('spt_active');
            $(spt_tabs_content).find("[data-value='" + self.attr('data-value') + "']").addClass('spt_active');
        });

        /* RATING */
        var spt_main_single_product_rating = '.spt_main_single_product_review .spt_main_single_product_rating ul li';
        $(spt_main_single_product_rating).on('click', function () {
            var self = $(this);
            $(spt_main_single_product_rating).removeClass('spt_active');
            self.addClass('spt_active');
            self.prevUntil('ul').addClass('spt_active');
        });

        /* Verify Input Number */
        var spt_input_number_verify = '.spt_input_number_verify';
        var spt_input_number_verify2 = '.spt_input_number_verify2';
        $(spt_input_number_verify).on('keyup', function (e) {
            var self = $(this);
            if (self.val() !== '') {
                if (Math.floor(self.val()) == parseInt(self.val(), 10) && $.isNumeric(self.val())) {
                    self.css({
                        'box-shadow': '0 0 5px 0 #009900'
                    });
                } else {
                    self.css({
                        'box-shadow': '0 0 5px 0 #990000'
                    });
                }
            } else {
                self.css({
                    'box-shadow': 'none'
                });
            }
        });
        $(spt_input_number_verify2).on('keyup', function (e) {
            var self = $(this);
            if (self.val() !== '') {
                if (Math.floor(self.val()) == parseInt(self.val(), 10) && $.isNumeric(self.val())) {
                    self.css({
                        'border-bottom': '2px solid #009900'
                    });
                } else {
                    self.css({
                        'border-bottom': '2px solid #990000'
                    });
                }
            } else {
                self.css({
                    'border-bottom': '1px solid #E2E2E2'
                });
            }
        });

        /* Coming Soon */
        var spt_comning_soong_countdown = '#spt_comning_soong_countdown';
        $(spt_comning_soong_countdown).TimeCircles();

        /* Go Top & Store Locator */
        var spt_go_to_top = $('#spt_go_top');
        var spt_store_locator = $('#spt_store_locator');
        var spt_window = $(window);
        var spt_window_height = spt_window.height();
        spt_window.on('scroll', function () {
            var self = $(this);
            if (self.scrollTop() > spt_window_height) {
                spt_go_to_top.addClass('spt_active');
                spt_store_locator.addClass('spt_active');
            } else {
                spt_go_to_top.removeClass('spt_active');
                spt_store_locator.removeClass('spt_active');
            }
        }).on('resize', function () {
            var self = $(this);
            spt_window_height = self.height();
        });
        spt_go_to_top.on('click', function () {
            var spt_body = 'html, body';
            $(spt_body).animate({
                scrollTop: 0
            }, 1500);
        });
    });
})(jQuery);
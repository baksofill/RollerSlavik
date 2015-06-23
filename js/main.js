$(document).ready(function(){


    /* -------------  Loader  -------------- */
   /* $(window).load(function () {
        $('.loader').delay(1000).fadeOut(600);
    });*/
    /* -------------  Loader END -------------- */

    $('button').click(function () {
        $(this).html('Кнопа не работает :( ').css('background-color', 'grey');
    });

    /* -------------  Tabs -------------- */


    function tabs() {
        var tabsNum = $(".tabs a").length;
        var tabHash = document.location.hash;
        if (tabHash === "") {
            tabHash = "#tab0"
        }
        ;
        var currentTab = parseInt(tabHash.slice(4));
        $(".tabs a[href='" + tabHash + "']").addClass("on");

        $(".tabs a").click(function () {
            $(".tabs a").removeClass("on");
            $(this).addClass("on");
            $(this).blur(0);
            tabHash = $(this).attr("href");
            currentTab = parseInt(tabHash.slice(4));
            setTabs();
        });

        function setTabs() {
            $("div.tab").hide();
            $("#tabCont" + currentTab).show();
        };
        setTabs();

        $('ul.tabs li').css('cursor', 'pointer');
        $('ul.tabs.tabs1 li').click(function () {
            var thisClass = this.className.slice(0, 2);
            $('div.t1').hide();
            $('div.t2').hide();
            $('div.t3').hide();
            $('div.t4').hide();
            $('div.' + thisClass).show();
            $('ul.tabs.tabs1 li').removeClass('tab-current');
            $(this).addClass('tab-current');
        });

    }

    tabs();
    /* -------------  Tabs END-------------- */

});





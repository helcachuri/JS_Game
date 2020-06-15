const speed = 20;

$(document).ready(function () {
        textWritingEffect($('.start .text'), speed, function () {
            $('.start .btn-start').show(500)
        });
        $('.start').show();
});

function nextStep(el, nextEl) {
    nextEl = nextEl[Math.floor(Math.random() * 2)];

    $(el).hide();
    $(el + ' .text').next().hide();
    textWritingEffect($(nextEl + ' .text'), speed, function () {
        if ($(nextEl + ' .text').next().length) {
            $(nextEl + ' .text').next().show(500);
        }
    });
    $(nextEl).show()
}

function resetGame(el) {
    nextStep(el, ['.group-1', '.group-1'])
}

function textWritingEffect(el, speed, callback) {
    let i = 0;
    let str = el.html();
    let l = str.length;

    el.html('');

    typeWriter();

    function typeWriter() {
        if (i <= l) {
            let strSlice = str.slice(i, i + 1);
            if (strSlice === '<') {
                strSlice = '<br>';
                i += 3;
            }
            el.html(el.html() + strSlice);
            i++;
            setTimeout(typeWriter, speed);
        } else {
            callback();
        }
    }
}
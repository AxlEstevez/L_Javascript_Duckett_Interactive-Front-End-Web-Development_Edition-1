(function() {

    var people = [
        {
            name: 'Casey',
            rate: 60
        },
        {
            name: 'Camille',
            rate: 80
        },
        {
            name: 'Gordon',
            rate: 75
        },
        {
            name: 'Nigel',
            rate: 120
        }
    ];

    var rows = [],
        $min = $('#value-min'),
        $max = $('#value-max'),
        $table = $('#rates');

    function makeRows() {
        people.forEach(function(person) {
            var $row  = $('<tr></tr>');
            $row.append($('<td></td>').text(person.name));
            $row.append($('<td></td>').text(person.rate));

            rows.push({
                person: person,
                $element: $row
            });

        });
    }

    function appendRows() {
        var $tbody = $('<tbody></tbody>');

        rows.forEach(function(row) {
            $tbody.append(row.$element);
        });

        $table.append($tbody);
    }

    function update(min, max) {
        rows.forEach(function(row) {
            if (row.person.rate >= min && row.person.rate <= max) {
                row.$element.show();
            }
            else {
                row.$element.hide();
            }
        });
    }

    function init() {
        var slider = document.getElementById('slider');
        noUiSlider.create(slider, {
            range: {
                'min': [0],
                'max': [150]
            },
            start: [65, 90],
            margin: 20,
            connect: true
        }).on('update', function() {
            $min.val(Math.round(slider.noUiSlider.get()[0]));
            $max.val(Math.round(slider.noUiSlider.get()[1]));
            update($min.val(), $max.val());
        });
        $min.change(function() {
            slider.noUiSlider.set([Math.round(this.value), null]);
        });
        $max.change(function() {
            slider.noUiSlider.set([null, Math.round(this.value)]);
        });
        makeRows();
        appendRows();
        update($min.val(), $max.val());
    }

    $(init);

}());
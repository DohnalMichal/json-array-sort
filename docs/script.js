var data = [
    {
        "title": "very long notes are truncated",
        "status": "open",
        "labels": ["none", "support"],
        "assignees": ["No one assigned"],
        "dueDate": "none",
        "targetRelease": "none",
        "source": "github",
        "link": "https://github.com/mudcube/MIDI.js/issues/246"
    },
    {
        "title": "Changes in Red Hat registr",
        "status": "CODING IN PROGRESS",
        "labels": "none",
        "assignees": ["Miguel Soriano"],
        "dueDate": "none",
        "targetRelease": "2.6 ER1",
        "source": "jiro",
        "link": "https://issues.jboss.org/projects/THREESCALE/issues/THREESCALE-2292?filter=allopenissues"
    }
];

/*Read from data.json | Doesn't work in Chrome*/
// function readTextFile(file, callback) {
//     var rawFile = new XMLHttpRequest();
//     rawFile.overrideMimeType("application/json");
//     rawFile.open("GET", file, true);
//     rawFile.onreadystatechange = function () {
//         if (rawFile.readyState === 4 && rawFile.status == "200") {
//             callback(rawFile.responseText);
//         }
//     }
//     rawFile.send(null);
// }

// readTextFile("./data.json", function (text) {
//     var data = JSON.parse(text);
//     console.log(data);


    var columns = {
        title: 'title',
        status: 'status',
        labels: 'labels',
        assignees: 'assignees',
        dueDate: 'dueDate',
        targetRelease: 'targetRelease',
        source: 'source',
        link: 'link'
    }

    var TestData = {
        data: data,
        columns: columns
    }

    var table = $('#root').tableSortable({
        data: TestData.data,
        columns: TestData.columns,
        dateParsing: true,
        processHtml: function (row, key) {
            if (key === 'avatar_url') {
                return '<a href="' + row[key] + '" target="_blank">View Avatar</a>'
            }
            if (key === 'url') {
                return '<a href="' + row[key] + '" target="_blank">Github Link</a>'
            }
            if (key === 'site_admin' && row[key]) {
                return '<span class="btn btn-warning btn-sm">Admin</span>'
            }
            return row[key]
        },
        columnsHtml: function (value, key) {
            return value;
        },
        pagination: 5,
        showPaginationLabel: true,
        prevText: 'Prev',
        nextText: 'Next',
        searchField: $('#search'),
        responsive: [
            {
                maxWidth: 992,
                minWidth: 769,
                columns: TestData.col,
                pagination: true,
                paginationLength: 3
            },
            {
                maxWidth: 768,
                minWidth: 0,
                columns: TestData.colXS,
                pagination: true,
                paginationLength: 2
            }
        ]
    })
// });
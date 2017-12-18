export const getUniqueID = (length = 15) => {
    if (typeof length !== 'number') {
        throw new Error('The function argument should be a number!');
    }

    let text = '';
    const possible =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
};

export const SORT = [
    {
        name: 'none',
        icon: 'fa fa-sort',
        func: () => 0
    },
    {
        name: 'asc',
        icon: 'fa fa-chevron-down',
        func: (a, b) => {
            if (a.text < b.text) {
                return -1;
            }
            if (a.text > b.text) {
                return 1;
            }

            return 0;
        }
    },
    {
        name: 'desc',
        icon: 'fa fa-chevron-up',
        func: (a, b) => {
            if (a.text > b.text) {
                return -1;
            }
            if (a.text < b.text) {
                return 1;
            }

            return 0;
        }
    }
];

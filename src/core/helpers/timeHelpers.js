import moment from 'moment';

export const dateConverter = date => moment(date).format('L');
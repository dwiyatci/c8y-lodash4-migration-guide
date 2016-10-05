const _ = require('lodash');
const replace = require('replace');

const replacementSpecs = [
  {
    regex: 'Object[.]hasOwnProperty',
    replacement: '_.has',
  },
  {
    regex: 'Object[.]keys',
    replacement: '_.keys',
  },
  {
    regex: 'Object[.]values',
    replacement: '_.values',
  },
  {
    regex: 'angular[.]copy',
    replacement: '_.cloneDeep',
  },
  {
    regex: 'angular[.]equals',
    replacement: '_.isEqual',
  },
  {
    regex: 'angular[.]extend',
    replacement: '_.assign',
  },
  {
    regex: 'angular[.]forEach',
    replacement: '_.forEach',
  },
  {
    regex: 'angular[.]identity',
    replacement: '_.identity',
  },
  {
    regex: 'angular[.]isArray',
    replacement: '_.isArray',
  },
  {
    regex: 'angular[.]isDate',
    replacement: '_.isDate',
  },
  {
    regex: 'angular[.]isDefined',
    replacement: '!_.isUndefined',
  },
  {
    regex: 'angular[.]isElement',
    replacement: '_.isElement',
  },
  {
    regex: 'angular[.]isFunction',
    replacement: '_.isFunction',
  },
  {
    regex: 'angular[.]isNumber',
    replacement: '_.isNumber',
  },
  {
    regex: 'angular[.]isObject',
    replacement: '_.isObjectLike',
  },
  {
    regex: 'angular[.]isString',
    replacement: '_.isString',
  },
  {
    regex: 'angular[.]isUndefined',
    replacement: '_.isUndefined',
  },
  {
    regex: 'angular[.]merge',
    replacement: '_.merge',
  },
  {
    regex: 'angular[.]noop',
    replacement: '_.noop',
  },
  {
    regex: '_[.]all',
    replacement: '_.every',
  },
  {
    regex: '_[.]any',
    replacement: '_.some',
  },
  {
    regex: '_[.]each',
    replacement: '_.forEach',
  },
  {
    regex: '_[.]extend',
    replacement: '_.assign',
  },
  {
    regex: '_[.]unique',
    replacement: '_.uniq',
  },
  {
    regex: '_[.]chain',
    replacement: '_',
  },
  {
    regex: '_[.]include',
    replacement: '_.includes',
  },
  {
    regex: '_[.]contains',
    replacement: '_.includes',
  },
  {
    regex: '_[.]pluck',
    replacement: '_.map',
  },
  {
    regex: '_[.]where',
    replacement: '_.filter',
  },
  {
    regex: '_[.]first',
    replacement: '_.head',
  },
  {
    regex: '_[.]invoke',
    replacement: '_.invokeMap',
  },
  {
    regex: '_[.]rest',
    replacement: '_.tail',
  },
  {
    regex: '_[.]isObject',
    replacement: '_.isObjectLike',
  },
];

_.forEach(replacementSpecs, replacementSpec => replace({
  regex: replacementSpec.regex,
  replacement: replacementSpec.replacement,
  paths: ['/Users/glenn/cumulocity/cumulocity-ui/app/scripts'],
  recursive: true,
}));

import merge from 'lodash/merge';
import Card from './Card';

export default function ComponentsOverrides() {
  return merge(
    Card(),
  );
}

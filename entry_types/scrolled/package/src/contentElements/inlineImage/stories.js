import './frontend';
import {storiesOfContentElement, filePermaId} from 'pageflow-scrolled/spec/support/stories';

storiesOfContentElement(module, {
  typeName: 'inlineImage',
  baseConfiguration: {
    id: filePermaId('imageFiles', 'turtle')
  },
  variants: [
    {
      name: 'With Caption',
      configuration: {caption: 'Some text here'}
    },
    {
      name: 'With Caption Variant',
      configuration: {
        caption: 'Some text here',
        captionVariant: 'inverted'
      },
      themeOptions: {
        properties: {
          'figureCaption-inverted': {
            darkContentSurfaceColor: 'var(--root-light-content-surface-color)',
            lightContentSurfaceColor: 'var(--root-dark-content-surface-color)',
            darkContentTextColor: 'var(--root-light-content-text-color)',
            lightContentTextColor: 'var(--root-dark-content-text-color)'
          }
        }
      }
    },
    {
      name: 'With Caption Above',
      configuration: {
        caption: 'Some text here'
      },
      themeOptions: {
        figureCaptionPosition: 'above'
      }
    },
    {
      name: 'With Rounded Corners',
      configuration: {
        caption: 'Image with rounded corners',
        imageModifiers: [
          {name: 'rounded', value: 'md'}
        ]
      },
      themeOptions: {
        properties: {
          root: {
            'contentElementBoxBorderRadius-sm': '8px',
            'contentElementBoxBorderRadius-md': '16px',
            'contentElementBoxBorderRadius-lg': '24px'
          }
        }
      }
    },
    {
      name: 'With Circle Crop',
      configuration: {
        caption: 'Image with circle crop',
        imageModifiers: [
          {name: 'crop', value: 'circle'}
        ]
      }
    }
  ],
  inlineFileRights: true
});

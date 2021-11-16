import {
  createAlignPlugin,
  createAutoformatPlugin,
  createBasicElementPlugins,
  createBlockquotePlugin,
  createBoldPlugin,
  createCodeBlockPlugin,
  createCodePlugin,
  createComboboxPlugin,
  createDeserializeAstPlugin,
  createDeserializeCSVPlugin,
  createDeserializeHTMLPlugin,
  createDeserializeMDPlugin,
  createDndPlugin,
  createExitBreakPlugin,
  createFontBackgroundColorPlugin,
  createFontColorPlugin,
  createFontSizePlugin,
  createHeadingPlugin,
  createHighlightPlugin,
  createHistoryPlugin,
  createHorizontalRulePlugin,
  createImagePlugin,
  createIndentPlugin,
  createItalicPlugin,
  createKbdPlugin,
  createLinkPlugin,
  createListPlugin,
  createMediaEmbedPlugin,
  createMentionPlugin,
  createNodeIdPlugin,
  createNormalizeTypesPlugin,
  createParagraphPlugin,
  createReactPlugin,
  createResetNodePlugin,
  createSelectOnBackspacePlugin,
  createSoftBreakPlugin,
  createStrikethroughPlugin,
  createSubscriptPlugin,
  createSuperscriptPlugin,
  createTablePlugin,
  createTodoListPlugin,
  createTrailingBlockPlugin,
  createUnderlinePlugin,
  PlatePlugin
} from '@udecode/plate';

import { CONFIG } from './config';

export const plugins: PlatePlugin[] = [
  createAlignPlugin(CONFIG.align),
  createAutoformatPlugin(CONFIG.autoformat),
  ...createBasicElementPlugins(),
  createBlockquotePlugin(),
  createBoldPlugin(),
  createCodeBlockPlugin(),
  createCodePlugin(),
  createComboboxPlugin(),
  createDndPlugin(),
  createExitBreakPlugin(CONFIG.exitBreak),
  createFontBackgroundColorPlugin(),
  createFontColorPlugin(),
  createFontSizePlugin(),
  createHeadingPlugin(),
  createHighlightPlugin(),
  createHistoryPlugin(),
  createHorizontalRulePlugin(),
  createImagePlugin(),
  createIndentPlugin(CONFIG.indent),
  createItalicPlugin(),
  createKbdPlugin(),
  createLinkPlugin(),
  createListPlugin(),
  createMediaEmbedPlugin(),
  createMentionPlugin(),
  createNodeIdPlugin(),
  createNormalizeTypesPlugin(CONFIG.forceLayout),
  createParagraphPlugin(),
  createReactPlugin(),
  createResetNodePlugin(CONFIG.resetBlockType),
  createSelectOnBackspacePlugin(CONFIG.selectOnBackspace),
  createSoftBreakPlugin(CONFIG.softBreak),
  createStrikethroughPlugin(),
  createSubscriptPlugin(),
  createSuperscriptPlugin(),
  createTablePlugin(),
  createTodoListPlugin(),
  createTrailingBlockPlugin(CONFIG.trailingBlock),
  createUnderlinePlugin(),
]

plugins.push(
  ...[
    createDeserializeMDPlugin({ plugins }),
    createDeserializeCSVPlugin({ plugins }),
    createDeserializeHTMLPlugin({ plugins }),
    createDeserializeAstPlugin({ plugins }),
  ]
)
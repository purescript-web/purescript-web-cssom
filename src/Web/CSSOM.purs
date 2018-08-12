module Web.CSSOM
  ( getStyleSheets
  ) where

import Effect (Effect)
import Web.CSSOM.Internal.Types (StyleSheetList)
import Web.DOM.Document (Document)

foreign import getStyleSheets :: Document -> Effect StyleSheetList

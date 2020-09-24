module Web.CSSOM.ElementCSSInlineStyle
  ( module Exports
  , style
  , fromHTMLElement
  ) where

import Effect (Effect)
import Unsafe.Coerce (unsafeCoerce)
import Web.CSSOM.Internal.Types (ElementCSSInlineStyle) as Exports
import Web.CSSOM.Internal.Types (ElementCSSInlineStyle, CSSStyleDeclaration)
import Web.HTML.HTMLElement (HTMLElement)

foreign import style :: ElementCSSInlineStyle -> Effect CSSStyleDeclaration

fromHTMLElement :: HTMLElement -> ElementCSSInlineStyle
fromHTMLElement = unsafeCoerce

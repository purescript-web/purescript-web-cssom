module Web.CSSOM.CSSStyleDeclaration
  ( module Exports
  , length
  , getPropertyPriority
  , getPropertyValue
  , removeProperty
  , setProperty
  ) where

import Prelude
import Effect (Effect)
import Web.CSSOM.Internal.Types (CSSStyleDeclaration) as Exports
import Web.CSSOM.Internal.Types (CSSStyleDeclaration)

foreign import cssText :: CSSStyleDeclaration -> Effect String
foreign import setCssText :: CSSStyleDeclaration -> String -> Effect Unit
foreign import length :: CSSStyleDeclaration -> Effect Number

foreign import getPropertyPriority :: CSSStyleDeclaration -> String -> Effect String
foreign import getPropertyValue :: CSSStyleDeclaration -> String -> Effect String
foreign import removeProperty :: CSSStyleDeclaration -> String -> Effect Unit
foreign import setProperty :: CSSStyleDeclaration -> String -> String -> Effect Unit

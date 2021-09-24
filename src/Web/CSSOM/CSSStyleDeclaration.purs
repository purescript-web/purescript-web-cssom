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
foreign import setCssText :: String -> CSSStyleDeclaration -> Effect Unit
foreign import length :: CSSStyleDeclaration -> Effect Number

foreign import getPropertyPriority :: String -> CSSStyleDeclaration -> Effect String
foreign import getPropertyValue :: String -> CSSStyleDeclaration -> Effect String
foreign import removeProperty :: String -> CSSStyleDeclaration -> Effect Unit
foreign import setProperty :: String -> String -> CSSStyleDeclaration -> Effect Unit

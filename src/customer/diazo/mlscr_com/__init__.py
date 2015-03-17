# -*- coding: utf-8 -*-
"""Propertyshelf MLS-CR.com."""

# python imports
import logging

# zope imports
from zope.i18nmessageid import MessageFactory

# local imports
from customer.diazo.mlscr_com import config

logger = logging.getLogger(config.PROJECT_NAME)
_ = MessageFactory('customer.diazo.mlscr_com')


def initialize(context):
    """Initializer called when used as a Zope 2 product."""

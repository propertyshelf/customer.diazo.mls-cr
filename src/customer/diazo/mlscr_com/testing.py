# -*- coding: utf-8 -*-
"""Test Layer for customer.diazo.mlscr_com."""

# zope imports
from plone.app.robotframework.testing import REMOTE_LIBRARY_BUNDLE_FIXTURE
from plone.app.testing import (
    FunctionalTesting,
    IntegrationTesting,
    PloneSandboxLayer,
    PLONE_FIXTURE,
    applyProfile,
)
from plone.testing import (
    Layer,
    z2,
)
from zope.configuration import xmlconfig


class CustomerDiazoMlscrComLayer(PloneSandboxLayer):
    """Custom Test Layer for customer.diazo.mlscr_com."""
    defaultBases = (PLONE_FIXTURE, )

    def setUpZope(self, app, configurationContext):
        """Set up Zope for testing."""
        # Load ZCML
        import customer.diazo.mlscr_com
        xmlconfig.file(
            'configure.zcml',
            customer.diazo.mlscr_com,
            context=configurationContext
        )

    def setUpPloneSite(self, portal):
        applyProfile(portal, 'customer.diazo.mlscr_com:default')


CUSTOMER_DIAZO_MLSCR_COM_FIXTURE = CustomerDiazoMlscrComLayer()


CUSTOMER_DIAZO_MLSCR_COM_INTEGRATION_TESTING = IntegrationTesting(
    bases=(CUSTOMER_DIAZO_MLSCR_COM_FIXTURE,),
    name='CustomerDiazoMlscrComLayer:IntegrationTesting'
)


CUSTOMER_DIAZO_MLSCR_COM_FUNCTIONAL_TESTING = FunctionalTesting(
    bases=(CUSTOMER_DIAZO_MLSCR_COM_FIXTURE,),
    name='CustomerDiazoMlscrComLayer:FunctionalTesting'
)


CUSTOMER_DIAZO_MLSCR_COM_ACCEPTANCE_TESTING = FunctionalTesting(
    bases=(
        CUSTOMER_DIAZO_MLSCR_COM_FIXTURE,
        REMOTE_LIBRARY_BUNDLE_FIXTURE,
        z2.ZSERVER_FIXTURE
    ),
    name='CustomerDiazoMlscrComLayer:AcceptanceTesting'
)


ROBOT_TESTING = Layer(name='customer.diazo.mlscr_com:Robot')

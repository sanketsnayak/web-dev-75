# Generated by Django 5.1.3 on 2024-11-11 15:23

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Parent",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=100)),
                ("address", models.TextField()),
                ("upi_id", models.CharField(max_length=100)),
                ("aadhaar_number", models.CharField(max_length=12)),
            ],
        ),
        migrations.CreateModel(
            name="Teenager",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=100)),
                ("address", models.TextField()),
                ("upi_id", models.CharField(max_length=100)),
                ("aadhaar_number", models.CharField(max_length=12)),
                (
                    "parent",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="teenagers",
                        to="teenfinapp.parent",
                    ),
                ),
            ],
        ),
    ]
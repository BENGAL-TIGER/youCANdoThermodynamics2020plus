FROM jupyter/datascience-notebook:latest

USER $NB_UID

# more R packages  
RUN conda install --quiet --yes \
    'r rstudio' \
    && \
    conda clean --all -f -y && \
    fix-permissions "${CONDA_DIR}" && \
    fix-permissions "/home/${NB_USER}"

RUN pip install --no-cache notebook